import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardFooter } from '../components/ui/card'

export default function Home() {
  const [story, setStory] = useState<string | null>(null)
  const [audio, setAudio] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchStory()
  }, [])

  const fetchStory = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('/api/generate-story')
      setStory(response.data.story)
      setAudio(response.data.audioUrl)
    } catch (error) {
      console.error('Error fetching story:', error)
      setError(error.response?.data?.error || 'An unexpected error occurred')
    }
    setLoading(false)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Scientific Bedtime Story</h1>
      <Card>
        <CardContent>
          {loading ? (
            <p className="text-center">Loading your bedtime story...</p>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            <>
              <div className="mb-6 text-lg font-medium">{story}</div>
              {audio && (
                <audio controls src={audio} className="w-full mb-4">
                  Your browser does not support the audio element.
                </audio>
              )}
            </>
          )}
        </CardContent>
        <CardFooter>
          <button
            onClick={fetchStory}
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate New Story'}
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}