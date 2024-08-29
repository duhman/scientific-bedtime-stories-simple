import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
    });

    res.status(200).json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
}