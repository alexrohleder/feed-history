const feed: Feed = {
  currentPage: 1,
  totalPages: 9,
  entries: [
    {
      type: "Odds change",
      timestamp: 1607947226,
      status: "1st half",
      statistics: {
        yellow_cards: "home: 0 — away: 0",
        red_cards: "home: 0 — away: 0",
        yellow_red_cards: "home: 0 — away: 0",
        corners: "home: 1 — away: 0",
      },
      markets: {
        "1": {
          name: "Winner",
          status: MarketStatus.ACTIVE,
          outcomes: [
            {
              name: "Denmark (Teok)",
              odds: 1.6,
              active: true,
            },
            {
              name: "draw",
              odds: 5.25,
              active: true,
            },
            {
              name: "Ivory Coast (Vasm)",
              odds: 4,
              active: true,
            },
          ],
        },
        "7 score=0:0": {
          name: "Goals Score 0:0",
          status: MarketStatus.ACTIVE,
          outcomes: [
            {
              name: "Denmark (Teok)",
              odds: 1.6,
              active: true,
            },
            {
              name: "draw",
              odds: 5.25,
              active: true,
            },
            {
              name: "Ivory Coast (Vasm)",
              odds: 4,
              active: true,
            },
          ],
        },
      },
    },
  ],
};

export default feed;
