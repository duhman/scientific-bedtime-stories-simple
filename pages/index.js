import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [story, setStory] = useState(null);
  const [audio, setAudio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStory();
  }, []);

  const fetchStory = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`/api/generate-story`);
      setStory(response.data.story);
      setAudio(response.data.audioUrl);
    } catch (error) {
      console.error('Error fetching story:', error);
      setError(error.response?.data?.error || 'An unexpected error occurred');
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Scientific Bedtime Story</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading your bedtime story...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <div className="mb-4 whitespace-pre-wrap">{story}</div>
            {audio && (
              <audio controls src={audio} className="w-full">
                Your browser does not support the audio element.
              </audio>
            )}
          </>
        )}
        <button
          onClick={fetchStory}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate New Story'}
        </button>
      </div>
    </div>
  );
}