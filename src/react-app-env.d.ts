/// <reference types="react-scripts" />

declare module "react-html-table-to-excel";
declare module "react-multivalue-text-input";

type SportTree = {
  key: string;
  label: string;
  nodes: SportTree[];
};

type SportEvent = {
  urn: string;
  name: string;
  timestamp: number;
  markets: SportEventMarket[];
  defaultMarketSelection: MarketSelection[]; // markets visible by default in front-end
  sportTree: SportTree[];
};

type SportEventMarket = {
  id: number;
  name: string;
  specifiers: Record<string, string[]>; // specifiers (default if none) and the count of outcomes within
};

type MarketSelection = {
  id: number;
  specifier?: string;
};

type Feed = {
  currentPage: number;
  pageCount: number;
  entries: FeedEntry[];
};

type FeedEntry = GenericFeedEntry | MarketChangeFeedEntry;

type GenericFeedEntry = {
  type: "fixture_change" | "bet_stop" | "bet_start";
  timestamp: number;
  status?: string;
  score?: string;
  statistics?: Record<string, string>;
};

type MarketChangeFeedEntry = {
  type: "odds_change" | "bet_settlement";
  timestamp: number;
  status: string;
  score: string;
  statistics?: Record<string, string>;
  markets: Record<string, FeedMarket>;
};

type FeedMarket = {
  specifiers: Record<string, FeedMarketSpecifier>;
};

type FeedMarketSpecifier = {
  status: FeedMarketStatus;
  voided: boolean;
  settled: boolean;
  outcomes: Record<string, FeedMarketOutcome>;
};

enum FeedMarketStatus {
  ACTIVE,
  INACTIVE,
  SUSPENDED,
}

type FeedMarketOutcome = {
  name: string;
  odds: number;
  result: boolean | null; // selected as settlement result or not, null if market not settled
  changedFromOdds?: number;
  active: boolean;
};
