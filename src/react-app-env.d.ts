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
  defaultMarketSelection: MarketSelection[];
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

type FeedEntry = GenericFeedEntry | OddsChangeFeedEntry;

type GenericFeedEntry = {
  type: "fixture_change" | "bet_stop" | "bet_start";
  timestamp: number;
  status?: string;
  score?: string;
  statistics?: Record<string, string>;
};

type OddsChangeFeedEntry = {
  type: "odds_change";
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
  changedFromOdds?: number;
  active: boolean;
};
