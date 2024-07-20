import axios from 'axios';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import util from 'util';

const parseXml = util.promisify(require('xml2js').parseString);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    // Fetch a random arXiv paper
    const arxivResponse = await axios.get('http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1&sortBy=lastUpdatedDate&sortOrder=descending');
    
    console.log('arXiv API response:', arxivResponse.data);

    // Parse XML
    const result = await parseXml(arxivResponse.data);
    console.log('Parsed XML:', JSON.stringify(result, null, 2));

    if (!result.feed || !result.feed.entry || !result.feed.entry[0]) {
      throw new Error('Unexpected arXiv API response structure');
    }

    const entry = result.feed.entry[0];
    const paper = {
      title: entry.title[0],
      summary: entry.summary[0],
    };

    console.log('Extracted paper:', paper);

    // Generate a shorter bedtime story using OpenAI
    const prompt = `Convert this scientific paper titled '${paper.title}' into a very short bedtime story for a 6-year-old child. Keep it simple, fun, and within 50 words: ${paper.summary}`;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a helpful assistant that converts scientific papers into very short, simple bedtime stories for young children."},
        {"role": "user", "content": prompt}
      ],
      max_tokens: 70,
    });

    if (!completion.choices || completion.choices.length === 0) {
      throw new Error('No completion choices returned from OpenAI');
    }

    let bedtimeStory = completion.choices[0].message.content.trim();

    console.log('Generated bedtime story:', bedtimeStory);

    // Remove or replace mathematical symbols
    bedtimeStory = bedtimeStory.replace(/[$\\]/g, '');

    // Generate audio using OpenAI text-to-speech
    const audioResponse = await openai.audio.speech.create({
      model: "tts-1",
      voice: "nova",
      input: bedtimeStory,
    });

    // Convert the audio response to a base64 string
    const audioBase64 = Buffer.from(await audioResponse.arrayBuffer()).toString('base64');
    const audioUrl = `data:audio/mp3;base64,${audioBase64}`;

    res.status(200).json({ story: bedtimeStory, audioUrl });
  } catch (error) {
    console.error('Error generating story:', error);
    if (error.response) {
      const responseData = error.response.data.toString(); // Convert Buffer to string
      console.error('API response error:', responseData);
    }
    res.status(500).json({ error: 'Failed to generate story', details: error.message });
  }
}