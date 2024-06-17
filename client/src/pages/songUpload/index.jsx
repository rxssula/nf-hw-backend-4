import axios from 'axios'
import React, { useState } from 'react'

const SongUpload = () => {
  const [songFile, setSongFile] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const [songName, setSongName] = useState('')

  const handleSongChange = (e) => {
    setSongFile(e.target.files[0])
  }

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0])
  }

  const handleNameChange = (e) => {
    setSongName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!songFile || !imageFile) {
      alert('Please select a file')
      return
    }

    const formData = new FormData()
    formData.append('song', songFile)
    formData.append('image', imageFile)
    formData.append('name', songName)

    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(
        'https://nf-hw-backend-4-production-c5e0.up.railway.app/api/v5/s3/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
          }
        }
      )
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full max-w-md mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="Spotify Logo"
            className="w-32 mx-auto"
          />
          <h1 className="text-3xl font-bold mt-4">Upload Song</h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Song Name</label>
            <input
              type="text"
              value={songName}
              required
              className="w-full p-3 mt-1 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleNameChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Song File</label>
            <input
              type="file"
              className="w-full p-3 mt-1 text-white rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleSongChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Song Image</label>
            <input
              type="file"
              className="w-full p-3 mt-1 text-white rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              onChange={handleImageChange}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  )
}

export default SongUpload
