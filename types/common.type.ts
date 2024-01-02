export enum Territory {
  HongKong = 'HK',
  Japan = 'JP',
  Malaysia = 'MY',
  Singapore = 'SG',
  Taiwan = 'TW',
}

export interface Paging {
  offset: number;
  limit: number;
  previous: string | null;
  next: string | null;
}

export interface Summary {
  total: number;
}

export interface Image {
  height: number;
  width: number;
  url: string;
}

export interface Artist {
  id: string;
  name: string;
  url: string;
  images: Image[];
}

export interface Album {
  id: string;
  name: string;
  url: string;
  explicitness: boolean;
  available_territories: Territory;
  images: Image[];
  release_date?: string;
  artist: Artist;
}

export interface Track {
  id: string;
  name: string;
  duration: number;
  isrc?: string;
  url: string;
  track_number: number;
  explicitness: boolean;
  available_territories: Territory;
  album: Album;
}

export interface Owner {
  id: string;
  name: string;
  description: string;
  url: string;
  images: Image[];
  updated_at: Date;
}

export interface Playlist {
  id: string;
  title: string;
  description: string;
  url?: string;
  images: Image[];
  tracks: {
    data: Track[];
    paging: Paging;
    summary: Summary;
  };
  owner: Owner;
  updated_at: Date;
}
