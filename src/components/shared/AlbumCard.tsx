import React from 'react';
import { Album } from '../../types';
import { Music, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface AlbumCardProps {
  album: Album;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card-hover overflow-hidden"
    >
      <div className="relative group">
        <img
          src={album.artwork}
          alt={album.title}
          className="w-full aspect-square object-cover rounded-lg shadow-lg mb-4 group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {album.spotifyUrl && (
            <a 
              href={album.spotifyUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/80 text-white p-3 rounded-full transition-colors"
              aria-label={`Listen to ${album.title} on Spotify`}
            >
              <Music className="h-5 w-5" />
            </a>
          )}
          
          {album.appleMusicUrl && (
            <a 
              href={album.appleMusicUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-secondary/80 text-black p-3 rounded-full transition-colors"
              aria-label={`Listen to ${album.title} on Apple Music`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      
      <div className="px-1">
        <h3 className="font-heading text-xl font-bold text-white mb-1">{album.title}</h3>
        <p className="text-text-secondary mb-2">{album.releaseYear}</p>
        <p className="text-text-muted text-sm">{album.tracks.length} tracks</p>
      </div>
    </motion.div>
  );
};

export default AlbumCard;