const event: SportEvent = {
  urn: "sr:match:123456",
  name: "LASK vs. RAPID",
  timestamp: 1608224434419,
  markets: [
    {
      id: 1,
      name: "1x2",
      specifiers: { default: 3 },
    },
    {
      id: 14,
      name: "Handicap {hcp}",
      specifiers: {
        "0:1": 3,
        "0:2": 3,
        "1:0": 3,
      },
    },
    {
      id: 18,
      name: "Total",
      specifiers: {
        "4.5": 2,
        "4": 2,
        "3.75": 2,
      },
    },
    {
      id: 1000,
      name: "Winner",
      specifiers: {
        e03keqp3: 20,
        awiqkd49: 20,
      },
    },
  ],
};

export default event;
