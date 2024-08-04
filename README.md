# Sleepytime Paper

This project generates short, Dr. Seuss-style bedtime stories from random scientific papers using OpenAI's GPT-3.5-turbo and converts them to audio using OpenAI's text-to-speech API with the Nova voice.

## Features

- Fetches random scientific papers from arXiv
- Generates concise, child-friendly bedtime stories based on scientific concepts
- Converts stories to audio using OpenAI's text-to-speech API
- Presents stories and audio in a user-friendly interface
- Allows users to generate new stories with a single click

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- OpenAI API (GPT-3.5-turbo for text generation, TTS-1 for audio conversion)
- Axios for HTTP requests
- Tailwind CSS for styling
- XML2JS for parsing arXiv API responses

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory and add your API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `pages/`: Contains the main pages of the application
  - `index.tsx`: Home page with story generation
  - `docs.tsx`: Documentation page
  - `api/`: API routes
    - `generate-story.ts`: Handles story generation and audio conversion
- `components/`: Reusable React components
  - `Sidebar.tsx`: Navigation sidebar
- `styles/`: Global styles and Tailwind CSS configuration

## Configuration

The project uses Next.js configuration (`next.config.js`) and Tailwind CSS (`tailwind.config.js`). Modify these files to adjust build settings or styling as needed.

## Deployment

This project is ready to be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Add the `OPENAI_API_KEY` environment variable in your Vercel project settings
3. Deploy the project

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).