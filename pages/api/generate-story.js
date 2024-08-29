import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';
import axios from 'axios';
import { parseStringPromise as parseXml } from 'xml2js';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set');
    return res.status(500).json({ error: 'OpenAI API key is missing' });
  }

  try {
    // Fetch random paper from arXiv
    const arxivResponse = await axios.get('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1&sortBy=lastUpdatedDate&sortOrder=descending');
    const result = await parseXml(arxivResponse.data);

    if (!result.feed || !result.feed.entry || !result.feed.entry[0]) {
      throw new Error('No entries found in arXiv response');
    }

    const entry = result.feed.entry[0];
    const paper = {
      title: entry.title[0],
      summary: entry.summary[0],
      url: entry.id[0],
    };

    // Generate story using OpenAI
    const prompt = `Create a very short, Dr. Seuss-style bedtime story (max 40 words) for a 6-year-old based on this scientific paper: '${paper.title}'. Make it fun and simple.`;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system", "content": "You are an expert at creating short, fun bedtime stories from scientific concepts." },
        { "role": "user", "content": prompt }
      ],
      max_tokens: 60,
    });

    if (!completion.choices || completion.choices.length === 0) {
      throw new Error('No completion choices returned from OpenAI');
    }

    let bedtimeStory = completion.choices[0].message.content.trim();
    bedtimeStory = bedtimeStory.replace(/[$\\]/g, '');

    // Generate audio using OpenAI
    const audioResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "nova",
      input: bedtimeStory,
    });

    const audioBase64 = Buffer.from(await audioResponse.arrayBuffer()).toString('base64');
    const audioUrl = `data:audio/mp3;base64,${audioBase64}`;

    res.status(200).json({ story: bedtimeStory, audioUrl, paperUrl: paper.url });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
}