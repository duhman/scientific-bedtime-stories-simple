import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, CardContent, CardFooter } from '../components/ui/card'
import './styles.css' // Ensure you have a styles.css file

export default function Home() {
  const [story, setStory] = useState(null)
  const [audio, setAudio] = useState(null)
  const [paperUrl, setPaperUrl] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStory()
    setThemeBasedOnTime()
  }, [])

  const fetchStory = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get('/api/generate-story')
      setStory(response.data.story)
      setAudio(response.data.audioUrl)
      setPaperUrl(response.data.paperUrl)
    } catch (error) {
      console.error('Error fetching story:', error)
      setError(error.response?.data?.error || 'An unexpected error occurred')
    }
    setLoading(false)
  }

  const setThemeBasedOnTime = () => {
    const hour = new Date().getHours()
    const isDarkMode = hour >= 18 || hour < 6
    document.documentElement.classList.toggle('dark', isDarkMode)
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-4xl font-extrabold mb-6 text-center fancy-text">Science Tales for Kids</h1>
      <Card className="card transition-transform transform hover:scale-105">
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
              {paperUrl && (
                <p className="text-center mt-4">
                  <a href={paperUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                    Read the academic paper
                  </a>
                </p>
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