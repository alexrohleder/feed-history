/// <reference types="react-scripts" />

declare module "group-by";
declare module "new-array";
declare module "react-html-table-to-excel";

type SportEvent = {
  urn: string;
  name: string;
  timestamp: number;
  markets: SportEventMarket[];
  defaultMarketSelection: MarketSelection[];
};

type SportEventMarket = {
  id: number;
  name: string;
  specifiers: Record<string, number>; // specifiers (default if none) and the count of outcomes within
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
  type: "Fixture change" | "Bet stop" | "Bet start";
  timestamp: number;
  status?: string;
  score?: string;
  statistics?: Record<string, string>;
};

type OddsChangeFeedEntry = {
  type: "Odds change";
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
  outcomes: FeedMarketOutcome[];
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
