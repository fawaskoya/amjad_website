import { Album } from '../types';

export const albums: Album[] = [
  {
    id: '1',
    title: 'Cosmic Beats',
    releaseYear: 2023,
    artwork: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg',
    spotifyUrl: 'https://open.spotify.com/embed/album/5ZuMypVNIeXrJZYQU3VMXD',
    appleMusicUrl: 'https://embed.music.apple.com/us/album/get-lucky-feat-pharrell-williams-nile-rodgers/617154241?i=617154250',
    tracks: [
      { id: '1-1', title: 'Interstellar Overture', duration: '3:42' },
      { id: '1-2', title: 'Cosmic Journey', duration: '4:15' },
      { id: '1-3', title: 'Stellar Waves', duration: '3:55' },
      { id: '1-4', title: 'Nebula Dreams', duration: '5:21' },
      { id: '1-5', title: 'Galactic Rhythm', duration: '4:07' },
      { id: '1-6', title: 'Astral Projection', duration: '6:18' },
      { id: '1-7', title: 'Supernova', duration: '4:45' },
      { id: '1-8', title: 'Cosmic Outro', duration: '2:55' },
    ],
  },
  {
    id: '2',
    title: 'Nebula Nights',
    releaseYear: 2022,
    artwork: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg',
    spotifyUrl: 'https://open.spotify.com/embed/album/3J5skAHuA8hZfVdkm3CmZV',
    soundCloudUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1248151765',
    tracks: [
      { id: '2-1', title: 'Midnight Horizon', duration: '4:12' },
      { id: '2-2', title: 'Starlight Boulevard', duration: '3:55' },
      { id: '2-3', title: 'Lunar Echo', duration: '5:08' },
      { id: '2-4', title: 'Night Vision', duration: '4:22' },
      { id: '2-5', title: 'Dark Matter', duration: '6:33' },
      { id: '2-6', title: 'Celestial Bodies', duration: '4:47' },
    ],
  },
  {
    id: '3',
    title: 'Retrowave EP',
    releaseYear: 2021,
    artwork: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg',
    spotifyUrl: 'https://open.spotify.com/embed/album/1XVRgCWuWrUvF4pCr0nVjs',
    tracks: [
      { id: '3-1', title: 'Neon Dreams', duration: '3:45' },
      { id: '3-2', title: 'Analog Memories', duration: '4:20' },
      { id: '3-3', title: 'Digital Sunset', duration: '3:58' },
      { id: '3-4', title: 'Retro Future', duration: '5:15' },
    ],
  }
];