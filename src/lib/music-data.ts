export type Music = {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  albumArt: string;
};

export const favoriteMusic: Music[] = [
  {
    id: 1,
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    year: 1975,
    genre: 'Rock',
    albumArt: 'https://picsum.photos/seed/music1/600/600',
  },
  {
    id: 2,
    title: 'Stairway to Heaven',
    artist: 'Led Zeppelin',
    album: 'Led Zeppelin IV',
    year: 1971,
    genre: 'Rock',
    albumArt: 'https://picsum.photos/seed/music2/600/600',
  },
  {
    id: 3,
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    year: 1976,
    genre: 'Rock',
    albumArt: 'https://picsum.photos/seed/music3/600/600',
  },
  {
    id: 4,
    title: 'Like a Rolling Stone',
    artist: 'Bob Dylan',
    album: 'Highway 61 Revisited',
    year: 1965,
    genre: 'Folk Rock',
    albumArt: 'https://picsum.photos/seed/music4/600/600',
  },
  {
    id: 5,
    title: 'Smells Like Teen Spirit',
    artist: 'Nirvana',
    album: 'Nevermind',
    year: 1991,
    genre: 'Grunge',
    albumArt: 'https://picsum.photos/seed/music5/600/600',
  },
  {
    id: 6,
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    year: 1982,
    genre: 'Pop',
    albumArt: 'https://picsum.photos/seed/music6/600/600',
  },
   {
    id: 7,
    title: 'Yesterday',
    artist: 'The Beatles',
    album: 'Help!',
    year: 1965,
    genre: 'Pop',
    albumArt: 'https://picsum.photos/seed/music7/600/600',
  },
  {
    id: 8,
    title: 'One',
    artist: 'U2',
    album: 'Achtung Baby',
    year: 1991,
    genre: 'Rock',
    albumArt: 'https://picsum.photos/seed/music8/600/600',
  },
];
