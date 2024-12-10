import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';

const CategoryPage = () => {
  const { genre } = useParams();
  const [musicList, setMusicList] = useState([]);
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5984/echostream_db/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: { genre: genre },
        limit: 20
      })
    })
      .then((response) => response.json())
      .then((data) => {
        const musicData = data.docs;
        setMusicList(musicData);
        const uniqueArtists = [...new Set(musicData.map(song => song.artist))];
        setArtistList(uniqueArtists);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [genre]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          {genre} Category
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Musiques</h2>
            <div className="space-y-4">
              {musicList.map((song) => (
                <div 
                  key={song._id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800">{song.title}</h3>
                  <div className="flex justify-between mt-2">
                    <span className="text-gray-600">{song.artist}</span>
                    <span className="text-gray-500">{song.release_date}</span>
                  </div>
                  <AudioPlayer song={song} />
                </div>
              ))}
              {musicList.length === 0 && (
                <p className="text-center text-gray-500">Aucune musique trouvée dans cette catégorie.</p>
              )}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Artistes</h2>
            <div className="space-y-2">
              {artistList.map((artist, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                  <h3 className="text-xl text-gray-800">{artist}</h3>
                </div>
              ))}
              {artistList.length === 0 && (
                <p className="text-center text-gray-500">Aucun artiste trouvé dans cette catégorie.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
