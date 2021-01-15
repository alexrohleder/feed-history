const event: SportEvent = {
  urn: "sr:match:123456",
  name: "LASK vs. RAPID",
  timestamp: 1608224434419,
  markets: [
    {
      id: 1,
      name: "1x2",
      specifiers: { default: ["Denmark (Teok)", "draw", "Ivory Coast (Vost)"] },
    },
    {
      id: 14,
      name: "Handicap {hcp}",
      specifiers: {
        "Some super long specifier name": [
          "Denmark (Teok) (0:1)",
          "draw (0:1)",
          "Ivory Coast (Vost) (0:1)",
        ],
        "0:2": [
          "Denmark (Teok) (0:2)",
          "draw (0:2)",
          "Ivory Coast (Vost) (0:2)",
        ],
        "1:0": [
          "Denmark (Teok) (1:0)",
          "draw (1:0)",
          "Ivory Coast (Vost) (1:0)",
        ],
      },
    },
    {
      id: 1000,
      name: "Winner With Super long name",
      specifiers: {
        e03keqp3: [
          "ABBOTT, JAMIE",
          "AN, BYEONG-HUN",
          "ANCER, ABRAHAM",
          "ANGLES, PEP",
          "ANTCLIFF, MAVERICK",
          "ARKENAU, HINRICH",
          "AUGENSTEIN, JOHN",
          "BALDWIN, MATTHEW",
          "BALIN, DANIEL",
          "BARJON, PAUL",
          "BERGER, DANIEL",
          "BERTHEUSSEN, ELIAS",
          "BEZUIDENHOUT, CHRISTIAAN",
          "BLOMSTRAND, CHRISTOFER",
          "BOOTE, DAVID",
          "BOURDY, GREGORY",
          "BRADLEY, KEEGAN",
          "BRUN, JULIEN",
          "CABRERA BELLO, RAFAEL",
          "CANTLAY, PATRICK",
        ],
        awiqkd49: [
          "ABBOTT, JAMIE",
          "AN, BYEONG-HUN",
          "ANCER, ABRAHAM",
          "ANGLES, PEP",
          "ANTCLIFF, MAVERICK",
          "ARKENAU, HINRICH",
          "AUGENSTEIN, JOHN",
          "BALDWIN, MATTHEW",
          "BALIN, DANIEL",
          "BARJON, PAUL",
          "BERGER, DANIEL",
          "BERTHEUSSEN, ELIAS",
          "BEZUIDENHOUT, CHRISTIAAN",
          "BLOMSTRAND, CHRISTOFER",
          "BOOTE, DAVID",
          "BOURDY, GREGORY",
          "BRADLEY, KEEGAN",
          "BRUN, JULIEN",
          "CABRERA BELLO, RAFAEL",
          "CANTLAY, PATRICK",
        ],
      },
    },
    {
      id: 18,
      name: "Total",
      specifiers: {
        "4.5": ["Denmark (Teok) (4.5)", "Ivory Coast (Vost) (4.5)"],
        "4": ["Denmark (Teok) (4)", "Ivory Coast (Vost) (4)"],
        "3.75": ["Denmark (Teok) (3.75)", "Ivory Coast (Vost) (3.75)"],
      },
    },
  ],
  defaultMarketSelection: [
    { id: 1, specifier: "default" },
    { id: 18, specifier: "3.75" },
    { id: 18, specifier: "4" },
    { id: 18, specifier: "4.5" },
    { id: 1000, specifier: "awiqkd49" },
    { id: 1000, specifier: "e03keqp3" },
    { id: 14, specifier: "Some super long specifier name" },
    { id: 14, specifier: "0:2" },
    { id: 14, specifier: "1:0" },
  ],
  sportTree: [
    {
      key: "sr:event:1",
      label: "Golf 1",
      nodes: [
        {
          key: "sr:event:2",
          label: "Golf 2",
          nodes: [
            {
              key: "sr:event:3",
              label: "Golf 3",
              nodes: [],
            },
          ],
        },
        {
          key: "sr:event:4",
          label: "Golf 4",
          nodes: [],
        },
      ],
    },
  ],
};

export default event;
