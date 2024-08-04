import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const generateImage = async (prompt) => {
  if (!process.env.OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY is not set');
    throw new Error('OpenAI API key is missing');
  }

  try {
    const response = await Promise.race([
      openai.images.generate({
        prompt,
        n: 1,
        size: '1024x1024',
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error('Image generation timed out')), 30000))
    ]);
    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw error;
  }
};