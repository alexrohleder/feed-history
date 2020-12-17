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
  type: string;
  timestamp: number;
  status: string;
  statistics?: Record<string, string>;
  markets: Record<string, Market>;
};

type Market = {
  name: string;
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
  active: boolean;
};
