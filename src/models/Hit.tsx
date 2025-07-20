export interface Hit {
  objectID: string;
  title: string;
  url: string;
  story_title: string;
  story_url: string;
  created_at_i: string;
  liked: boolean;
}

export interface Faves {
  [key: string]: Hit;
}
