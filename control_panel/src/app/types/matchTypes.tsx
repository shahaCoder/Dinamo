// types/matchTypes.ts

export type MatchEvent = {
  minute: string;
  type: 'goal' | 'substitution' | 'yellow_card' | 'red_card';
  team: 'home' | 'away';
  playerName?: string;
  assistName?: string;
  subIn?: string;
  subOut?: string;
};

export type FormTranslation = {
  locale: string;
  opponent: string;
  stadium: string;
  league: string;
  referee: string;
};

export type FormMatchProps = {
  matchDate: string;
  isHomeGame: boolean;
  homeTeamScore: number;
  awayTeamScore: number;
  opponentLogo?: string;
  translations: FormTranslation[];
  events: MatchEvent[];
};
