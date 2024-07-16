import axios from 'axios';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { parseString } from 'xml2js';
import util from 'util';

const parseXml = util.promisify(parseString);

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

    // Generate bedtime story using OpenAI
    const prompt = `Convert this scientific paper titled '${paper.title}' with the following abstract into a short bedtime story for a 10-year-old child: ${paper.summary}`;
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {"role": "system", "content": "You are a helpful assistant that converts scientific papers into bedtime stories for children."},
        {"role": "user", "content": prompt}
      ],
      max_tokens: 300,
    });

    if (!completion.choices || completion.choices.length === 0) {
      throw new Error('No completion choices returned from OpenAI');
    }

    const bedtimeStory = completion.choices[0].message.content.trim();

    console.log('Generated bedtime story:', bedtimeStory);

    // Generate audio using ElevenLabs API
    const voiceId = req.query.voiceId || 'EXAVITQu4vr4xnSDxMaL'; // Josh voice
    const fileName = `story_${crypto.randomBytes(4).toString('hex')}.mp3`;
    const filePath = path.join(process.cwd(), 'public', fileName);

    const elevenLabsResponse = await axios({
      method: 'post',
      url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': process.env.ELEVEN_API_KEY
      },
      data: {
        text: bedtimeStory,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.5
        }
      },
      responseType: 'arraybuffer'
    });

    fs.writeFileSync(filePath, elevenLabsResponse.data);

    res.status(200).json({ story: bedtimeStory, audioUrl: `/${fileName}` });
  } catch (error) {
    console.error('Error generating story:', error);
    if (error.response) {
      console.error('API response error:', error.response.data);
    }
    res.status(500).json({ error: 'Failed to generate story', details: error.message });
  }
}