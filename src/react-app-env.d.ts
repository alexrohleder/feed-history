/// <reference types="react-scripts" />

type SportEvent = {
  urn: string;
  name: string;
  timestamp: number;
  products: Entity[];
  markets: Entity[];
};

type Entity = {
  id: number;
  name: string;
};

type Feed = {
  currentPage: number;
  totalPages: number;
  entries: FeedEntry[];
};

type FeedEntry = {
  type: "Odds change" | "Fixture change" | "Bet stop";
  timestamp: number;
  status?: string;
  score?: string;
  statistics?: Record<string, string>;
  markets?: Record<string, Market>;
};

type Market = {
  status: MarketStatus;
  outcomes: MarketOutcome[];
};

enum MarketStatus {
  ACTIVE,
  INACTIVE,
  SUSPENDED,
}

type MarketOutcome = {
  name: string;
  odds: number;
  changedFromOdds?: number;
  active: boolean;
};
