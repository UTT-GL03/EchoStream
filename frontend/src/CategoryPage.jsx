import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AudioPlayer from './AudioPlayer';
import PlayerBar from './PlayerBar';

const CategoryPage = () => {
  const { genre } = useParams();
  const [displayedMusics, setDisplayedMusics] = useState([]);
  const [displayedArtists, setDisplayedArtists] = useState([]);
  const [randomSong, setRandomSong] = useState(null);
  const [musicBookmark, setMusicBookmark] = useState(null);

  const LOAD_LIMIT = 10;

  const fetchDataWithBookmark = (bookmark = null) => {
    return fetch('http://localhost:5984/echostream_db/_find', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selector: { genre: genre },
        limit: LOAD_LIMIT,
        bookmark: bookmark
      })
    }).then((response) => response.json());
  };

  useEffect(() => {
    fetchDataWithBookmark()
      .then((data) => {
        const musicData = data.docs;
        setDisplayedMusics(musicData);
        setMusicBookmark(data.bookmark);
        
        const uniqueArtists = [...new Set(musicData.map(song => song.artist))];
        setDisplayedArtists(uniqueArtists);
        
        if (!randomSong && musicData.length > 0) {
          const randomIndex = Math.floor(Math.random() * musicData.length);
          setRandomSong(musicData[randomIndex]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [genre]);

  const loadMoreMusics = () => {
    if (musicBookmark) {
      fetchDataWithBookmark(musicBookmark)
        .then((data) => {
          const newMusicData = data.docs;
          setDisplayedMusics(prev => [...prev, ...newMusicData]);
          setMusicBookmark(data.bookmark);
        })
        .catch((error) => console.error("Error fetching more musics:", error));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto" style={{ paddingBottom: '100px' }}>
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          {genre} Category
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Musiques</h2>
            <div 
              className="bg-white rounded-lg shadow overflow-y-auto pr-2"
              style={{ maxHeight: '600px' }}
            >
              <div className="space-y-4 p-4">
                {displayedMusics.map((song) => (
                  <div 
                    key={song._id}
                    className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800">{song.title}</h3>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-600">{song.artist}</span>
                      <span className="text-gray-500">{song.release_date}</span>
                    </div>
                    <AudioPlayer song={song} />
                  </div>
                ))}
              </div>
              
              {musicBookmark && (
                <div className="text-center p-4">
                  <button 
                    onClick={loadMoreMusics}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Afficher plus de musiques
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Artistes</h2>
            <div 
              className="bg-white rounded-lg shadow overflow-y-auto pr-2"
              style={{ maxHeight: '600px' }}
            >
              <div className="space-y-2 p-4">
                {displayedArtists.map((artist, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-shadow">
                    <h3 className="text-xl text-gray-800">{artist}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlayerBar randomSong={randomSong}/>
    </div>
  );
};

export default CategoryPage;