import { Lyric } from './lyric.model';

class Lyrics extends Lyric {
  dateTimeSearched: Date;
  _id: String;
}

export interface SearchHistory {
  status: String;
  searchHistory: Lyrics[];
}
