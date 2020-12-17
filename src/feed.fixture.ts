const feed: Feed = {
  currentPage: 1,
  totalPages: 9,
  entries: [
    {
      type: "Odds change",
      timestamp: 1608227771323,
      status: "1st half",
      score: "0 — 0",
      statistics: {
        yellow_cards: "home: 0 — away: 0",
        red_cards: "home: 0 — away: 0",
        yellow_red_cards: "home: 0 — away: 0",
        corners: "home: 1 — away: 0",
      },
      markets: {
        "1": {
          status: 0,
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
          status: 0,
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

for (let i = 1000; i < 100000; i += 1000) {
  feed.entries.push({
    ...feed.entries[0],
    timestamp: feed.entries[0].timestamp + i,
  });
}

export default feed;
