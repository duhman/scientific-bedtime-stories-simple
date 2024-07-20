# Scientific Bedtime Stories (Simple Version)

This project generates bedtime stories from random scientific papers using OpenAI's GPT-3 and converts them to audio using OpenAI's text-to-speech API with the Nova voice.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

- Fetches a random scientific paper from arXiv
- Generates a bedtime story based on the paper using OpenAI's GPT-3
- Converts the story to audio using OpenAI's text-to-speech API with the Nova voice
- Allows users to generate new stories with a button click

## Technologies Used

- Next.js
- React
- OpenAI API
- Axios for HTTP requests
- Tailwind CSS for styling

## Deployment

This project is ready to be deployed on Vercel. Simply connect your GitHub repository to Vercel and add the necessary environment variables in your Vercel project settings.

## License

[MIT](https://choosealicense.com/licenses/mit/)