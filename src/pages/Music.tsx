import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { albums } from '../data/albums';
import SectionHeading from '../components/shared/SectionHeading';
import AlbumCard from '../components/shared/AlbumCard';
import { Play, Pause, Music2, ExternalLink } from 'lucide-react';

const Music: React.FC = () => {
  const [activeAlbum, setActiveAlbum] = useState(albums[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // This would handle actual play/pause functionality with a real audio player
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Music"
          subtitle="Listen to DJ Nebula's releases, singles, and collaborations"
        />
        
        {/* Featured Album Player */}
        <div className="bg-background-light rounded-xl overflow-hidden shadow-lg mb-16">
          <div className="flex flex-col md:flex-row">
            {/* Album Cover */}
            <div className="md:w-1/3 relative group">
              <img 
                src={activeAlbum.artwork} 
                alt={activeAlbum.title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button
                  onClick={handlePlayPause}
                  className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                </button>
              </div>
            </div>
            
            {/* Album Details */}
            <div className="p-6 md:p-8 md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                {activeAlbum.title}
              </h2>
              <p className="text-text-secondary mb-6">{activeAlbum.releaseYear}</p>
              
              {/* Track List */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-3">Tracklist</h3>
                <ul className="space-y-2">
                  {activeAlbum.tracks.map((track, index) => (
                    <li key={track.id} className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <div className="flex items-center">
                        <span className="text-primary font-medium mr-3">{index + 1}</span>
                        <span className="text-text-primary">{track.title}</span>
                      </div>
                      <span className="text-text-secondary">{track.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Streaming Links */}
              <div className="flex flex-wrap gap-3">
                {activeAlbum.spotifyUrl && (
                  <a
                    href={activeAlbum.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm px-4 py-2 bg-[#1DB954] text-white rounded-md hover:bg-[#1DB954]/90 transition-colors"
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </a>
                )}
                
                {activeAlbum.appleMusicUrl && (
                  <a
                    href={activeAlbum.appleMusicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm px-4 py-2 bg-[#FB233B] text-white rounded-md hover:bg-[#FB233B]/90 transition-colors"
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.664.113 1.322.376 1.945.416.995 1.1 1.748 2.064 2.28.56.307 1.157.472 1.784.55.737.097 1.477.082 2.216.082L17.9 24c.464-.084.928-.162 1.382-.29 1.114-.31 2.025-.92 2.64-1.93.433-.7.642-1.47.723-2.278.098-.98.097-1.963.097-2.946 0-3.36.013-6.72-.012-10.08-.017-1.015-.17-2.014-.546-2.97-.216-.547-.514-1.027-.89-1.45-.693-.795-1.533-1.31-2.54-1.578-.38-.103-.778-.156-1.172-.18-.57-.033-1.14-.046-1.708-.07H7.75c-.103.015-.208.027-.312.04-.3.04-.59.093-.89.143-.83.134-1.618.49-2.268 1.13-.58.58-.933 1.283-1.12 2.097-.17.746-.17 1.505-.166 2.263L3.01 12c.016.81.016 1.618.037 2.427.032 1.095.192 2.165.777 3.13.53.87 1.292 1.468 2.258 1.816.896.323 1.826.377 2.764.377l13.096-.003c.566-.058 1.135-.102 1.694-.23.755-.17 1.458-.45 2.068-.9.945-.7 1.532-1.64 1.87-2.76.082-.276.142-.56.183-.844.126-.892.163-1.792.165-2.695.006-2.467.006-4.934.007-7.403z"/>
                      <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.664.113 1.322.376 1.945.416.995 1.1 1.748 2.064 2.28.56.307 1.157.472 1.784.55.737.097 1.477.082 2.216.082L17.9 24c.464-.084.928-.162 1.382-.29 1.114-.31 2.025-.92 2.64-1.93.433-.7.642-1.47.723-2.278.098-.98.097-1.963.097-2.946 0-3.36.013-6.72-.012-10.08-.017-1.015-.17-2.014-.546-2.97-.216-.547-.514-1.027-.89-1.45-.693-.795-1.533-1.31-2.54-1.578-.38-.103-.778-.156-1.172-.18-.57-.033-1.14-.046-1.708-.07H7.75c-.103.015-.208.027-.312.04-.3.04-.59.093-.89.143-.83.134-1.618.49-2.268 1.13-.58.58-.933 1.283-1.12 2.097-.17.746-.17 1.505-.166 2.263L3.01 12c.016.81.016 1.618.037 2.427.032 1.095.192 2.165.777 3.13.53.87 1.292 1.468 2.258 1.816.896.323 1.826.377 2.764.377l13.096-.003c.566-.058 1.135-.102 1.694-.23.755-.17 1.458-.45 2.068-.9.945-.7 1.532-1.64 1.87-2.76.082-.276.142-.56.183-.844.126-.892.163-1.792.165-2.695.006-2.467.006-4.934.007-7.403z" fill="none"/>
                      <path d="M12 3.212l-.2.002c-.302.004-.605.016-.905.042-.696.06-1.318.23-1.87.543-.67.382-1.142.962-1.452 1.654-.257.573-.37 1.172-.413 1.793-.034.49-.035.982-.028 1.473.004.374.01.748.04 1.12.036.452.11.897.264 1.322.3.825.77 1.497 1.536 1.962.35.213.72.346 1.118.43.34.07.686.093 1.034.108.145.006.29.013.436.014l.26.007c.17-.006.34-.011.51-.022.296-.02.587-.055.873-.114.95-.197 1.71-.637 2.223-1.453.34-.538.5-1.14.573-1.778.048-.413.07-.828.076-1.243.013-.89-.028-1.77-.318-2.614-.26-.756-.696-1.37-1.347-1.844-.578-.424-1.225-.662-1.908-.778-.16-.027-.32-.045-.48-.061z" fill="none"/>
                    </svg>
                    Apple Music
                  </a>
                )}
                
                {activeAlbum.soundCloudUrl && (
                  <a
                    href={activeAlbum.soundCloudUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm px-4 py-2 bg-[#FF5500] text-white rounded-md hover:bg-[#FF5500]/90 transition-colors"
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.56 8.87V17h8.76c1.85-.13 3.28-1.67 3.28-3.55 0-1.87-1.5-3.42-3.36-3.55a3.7 3.7 0 0 0-.46-4.05A3.64 3.64 0 0 0 16 4.41c-.54 0-1.06.12-1.5.34-1.36-1.2-3.4-1.33-4.93-.26-.6.41-1.07 1.03-1.37 1.74-.2.44-.32.9-.37 1.37-.23.4-.37.86-.37 1.36zM0 12.94c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm5 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4-3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm5 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                    </svg>
                    SoundCloud
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Embedded Player */}
          <div className="px-6 pb-6">
            <iframe 
              src={activeAlbum.spotifyUrl}
              width="100%" 
              height="80" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title={`${activeAlbum.title} on Spotify`}
              className="mt-6"
            ></iframe>
          </div>
        </div>
        
        {/* Discography */}
        <div className="mb-16">
          <SectionHeading 
            title="Discography"
            subtitle="Explore DJ Nebula's complete collection of releases"
            alignment="left"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album) => (
              <div 
                key={album.id} 
                onClick={() => setActiveAlbum(album)}
                className="cursor-pointer"
              >
                <AlbumCard album={album} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Streaming Platforms */}
        <div className="mb-16">
          <SectionHeading 
            title="Listen Everywhere"
            subtitle="Find DJ Nebula's music on all major streaming platforms"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-hover flex items-center p-6 bg-background-lighter transition-colors hover:bg-background-lighter/80"
            >
              <div className="bg-[#1DB954] p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Spotify</h3>
                <p className="text-text-secondary text-sm">Follow & stream DJ Nebula</p>
              </div>
              <ExternalLink className="h-5 w-5 text-text-secondary ml-auto" />
            </a>
            
            <a 
              href="https://music.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-hover flex items-center p-6 bg-background-lighter transition-colors hover:bg-background-lighter/80"
            >
              <div className="bg-[#FB233B] p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.664.113 1.322.376 1.945.416.995 1.1 1.748 2.064 2.28.56.307 1.157.472 1.784.55.737.097 1.477.082 2.216.082L17.9 24c.464-.084.928-.162 1.382-.29 1.114-.31 2.025-.92 2.64-1.93.433-.7.642-1.47.723-2.278.098-.98.097-1.963.097-2.946 0-3.36.013-6.72-.012-10.08-.017-1.015-.17-2.014-.546-2.97-.216-.547-.514-1.027-.89-1.45-.693-.795-1.533-1.31-2.54-1.578-.38-.103-.778-.156-1.172-.18-.57-.033-1.14-.046-1.708-.07H7.75c-.103.015-.208.027-.312.04-.3.04-.59.093-.89.143-.83.134-1.618.49-2.268 1.13-.58.58-.933 1.283-1.12 2.097-.17.746-.17 1.505-.166 2.263L3.01 12c.016.81.016 1.618.037 2.427.032 1.095.192 2.165.777 3.13.53.87 1.292 1.468 2.258 1.816.896.323 1.826.377 2.764.377l13.096-.003c.566-.058 1.135-.102 1.694-.23.755-.17 1.458-.45 2.068-.9.945-.7 1.532-1.64 1.87-2.76.082-.276.142-.56.183-.844.126-.892.163-1.792.165-2.695.006-2.467.006-4.934.007-7.403z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Apple Music</h3>
                <p className="text-text-secondary text-sm">Listen on Apple Music</p>
              </div>
              <ExternalLink className="h-5 w-5 text-text-secondary ml-auto" />
            </a>
            
            <a 
              href="https://soundcloud.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="card-hover flex items-center p-6 bg-background-lighter transition-colors hover:bg-background-lighter/80"
            >
              <div className="bg-[#FF5500] p-3 rounded-full mr-4">
                <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.56 8.87V17h8.76c1.85-.13 3.28-1.67 3.28-3.55 0-1.87-1.5-3.42-3.36-3.55a3.7 3.7 0 0 0-.46-4.05A3.64 3.64 0 0 0 16 4.41c-.54 0-1.06.12-1.5.34-1.36-1.2-3.4-1.33-4.93-.26-.6.41-1.07 1.03-1.37 1.74-.2.44-.32.9-.37 1.37-.23.4-.37.86-.37 1.36zM0 12.94c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm5 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4-3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3zm5 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">SoundCloud</h3>
                <p className="text-text-secondary text-sm">Follow for exclusive content</p>
              </div>
              <ExternalLink className="h-5 w-5 text-text-secondary ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

export default Music;