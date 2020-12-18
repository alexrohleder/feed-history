const feed: Feed = {
  currentPage: 1,
  totalPages: 9,
  entries: [
    {
      type: "Fixture change",
      timestamp: 1609835641711,
    },
    {
      type: "Fixture change",
      timestamp: 1609835642261,
    },
    {
      type: "Odds change",
      timestamp: 1609835718539,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 88,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.65,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 3.9,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.6,
                },
              ],
            },
            "hcp=0:3": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:3)",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "draw (0:3)",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:3)",
                  odds: 1.25,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.3,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.7,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.35,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "over 4.5",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "under 4.5",
                  odds: 1.75,
                },
              ],
            },
            "total=4.25": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4.25",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "over 4.25",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 1.85,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.15,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.75,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.7,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.18,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.75,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 13.75,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.95,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.55,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.9,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.85,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 3.75,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.4,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 3.95,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.6,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.85,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 10.25,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.6,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.5,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.5,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.5,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.4,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 3.5,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.55,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.7,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 6,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 5.75,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 17.75,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.16,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718549,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 84,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 3.9,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.6,
                },
              ],
            },
            "hcp=0:3": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:3)",
                  odds: 7.5,
                },
                {
                  active: true,
                  name: "draw (0:3)",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:3)",
                  odds: 1.25,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.35,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.7,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.35,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 1.7,
                },
              ],
            },
            "total=4.25": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4.25",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 4.25",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 1.85,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.2,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.7,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.65,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.18,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.8,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 13.5,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.85,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.5,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.85,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.85,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 3.8,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.3,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.3,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.4,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.6,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.85,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 10.5,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.55,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.5,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.5,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.6,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.45,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 3.4,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.5,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.7,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 6.25,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 5.75,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 18.5,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718559,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 80,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 3.95,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.6,
                },
              ],
            },
            "hcp=0:3": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:3)",
                  odds: 7.5,
                },
                {
                  active: true,
                  name: "draw (0:3)",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:3)",
                  odds: 1.25,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.35,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.7,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.35,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 1.75,
                },
              ],
            },
            "total=4.25": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4.25",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 4.25",
                  odds: 1.95,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 1.85,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.25,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.6,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.6,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.18,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.85,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 13.25,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.8,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.5,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.75,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.85,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 3.9,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.4,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4.1,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.55,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.85,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 10.75,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.5,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.5,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.65,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.5,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.5,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.5,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.75,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 6.5,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 6,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 19.5,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718569,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  changedFromOdds: 5.25,
                  odds: 5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 76,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.45,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.2,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 4.05,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.6,
                },
              ],
            },
            "hcp=0:3": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:3)",
                  odds: 7.75,
                },
                {
                  active: true,
                  name: "draw (0:3)",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:3)",
                  odds: 1.25,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.35,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.6,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 2,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 1.8,
                },
              ],
            },
            "total=4.25": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4.25",
                  odds: 1.8,
                },
                {
                  active: true,
                  name: "over 4.25",
                  odds: 2,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 1.9,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.35,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.5,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.5,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.2,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.95,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.95,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 12.75,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.65,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.6,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.8,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.2,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.2,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.4,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4.2,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.55,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.8,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 11.5,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.22,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.4,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.55,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.4,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.5,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.6,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 3.2,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.5,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 7,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 6.25,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 21,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718579,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 68,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.45,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.2,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 4.1,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.55,
                },
              ],
            },
            "hcp=0:3": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:3)",
                  odds: 8,
                },
                {
                  active: true,
                  name: "draw (0:3)",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:3)",
                  odds: 1.25,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.4,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.6,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 1.85,
                },
              ],
            },
            "total=4.25": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4.25",
                  odds: 1.75,
                },
                {
                  active: true,
                  name: "over 4.25",
                  odds: 2.05,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 1.95,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.45,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.4,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.2,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 4.05,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.8,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.95,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 12.25,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.55,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.5,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.75,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.4,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 4.15,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.15,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.75,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4.35,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.8,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 12,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 6,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.22,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.3,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.6,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.4,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.95,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 3.1,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.9,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 7.5,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 6.5,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 23,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718589,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 68,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.45,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.2,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.2,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=1:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (1:0)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw (1:0)",
                  odds: 6.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (1:0)",
                  odds: 8.25,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 4.15,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.55,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.4,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.55,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 1.9,
                },
              ],
            },
            "total=4.25": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4.25",
                  odds: 1.7,
                },
                {
                  active: true,
                  name: "over 4.25",
                  odds: 2.1,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.8,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.55,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.3,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.3,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.2,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 4.2,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.8,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 11.75,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.4,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 1.95,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.4,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.75,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.4,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 4.25,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.1,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.1,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.75,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4.45,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.8,
                },
              ],
            },
            "hcp=1:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (1:0)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw (1:0)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (1:0)",
                  odds: 12.5,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 2,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.2,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.65,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.1,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 1.95,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2.95,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 4.05,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 8,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.5,
                },
                {
                  active: true,
                  name: "2",
                  odds: 6.75,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 25,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718599,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  changedFromOdds: 5,
                  odds: 4.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 4.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 60,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.45,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.2,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.14,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.2,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.2,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=1:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (1:0)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw (1:0)",
                  odds: 6.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (1:0)",
                  odds: 8.25,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 4.25,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.55,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.3,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 1.8,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 1.95,
                },
              ],
            },
            "total=3.75": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.75",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "over 3.75",
                  odds: 1.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.75,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.05,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.7,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.25,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.35,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.2,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.22,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.2,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 4.3,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.75,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.05,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 11.25,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.35,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.4,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 2,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.25,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.7,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 4.4,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4.05,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4.05,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4.6,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.75,
                },
              ],
            },
            "hcp=1:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (1:0)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw (1:0)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (1:0)",
                  odds: 13,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.7,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2.9,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.4,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.85,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2.85,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "2",
                  odds: 4.15,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 8.5,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.5,
                },
                {
                  active: true,
                  name: "2",
                  odds: 7,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 27,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.6,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.65,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
    {
      type: "Odds change",
      timestamp: 1609835718609,
      status: "1st half",
      score: "home 0 — away 0",
      markets: {
        "1": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  changedFromOdds: 1.6,
                  odds: 1.65,
                },
                {
                  active: true,
                  name: "draw",
                  changedFromOdds: 4.95,
                  odds: 4.9,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  changedFromOdds: 4,
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "7": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.65,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 4.9,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.95,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "8": {
          specifiers: {
            "goalnr=1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.55,
                },
                {
                  active: true,
                  name: "none",
                  odds: 58,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.45,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "10": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.22,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.16,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 2.2,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "11": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 3.2,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "12": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "draw",
                  odds: 2.1,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "13": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 3.7,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "14": {
          specifiers: {
            "hcp=1:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (1:0)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw (1:0)",
                  odds: 6.75,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (1:0)",
                  odds: 8.25,
                },
              ],
            },
            "hcp=0:2": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:2)",
                  odds: 4.35,
                },
                {
                  active: true,
                  name: "draw (0:2)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:2)",
                  odds: 1.55,
                },
              ],
            },
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 2.45,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 4.5,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "18": {
          specifiers: {
            "total=4": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 4",
                  odds: 1.75,
                },
                {
                  active: true,
                  name: "over 4",
                  odds: 2.05,
                },
              ],
            },
            "total=3.75": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.75",
                  odds: 2,
                },
                {
                  active: true,
                  name: "over 3.75",
                  odds: 1.8,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "19": {
          specifiers: {
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.75,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 2.1,
                },
              ],
            },
            "total=3.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 3.5",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "over 3.5",
                  odds: 3.8,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 3.15,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.35,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "20": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 4.1,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.22,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.2,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 4.45,
                },
              ],
            },
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 1.75,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 2.05,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "23": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 10.75,
                },
                {
                  active: true,
                  name: "1",
                  odds: 4.25,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.35,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 2.05,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "24": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 4.15,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.7,
                },
                {
                  active: true,
                  name: "2",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 4.55,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "26": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "odd",
                  odds: 1.9,
                },
                {
                  active: true,
                  name: "even",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "60": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 2.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4.05,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "61": {
          specifiers: {
            "score=0:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "draw",
                  odds: 2.95,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 4.05,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "63": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) or draw",
                  odds: 1.2,
                },
                {
                  active: true,
                  name: "Denmark (Teok) or Ivory Coast (Vasm)",
                  odds: 1.35,
                },
                {
                  active: true,
                  name: "draw or Ivory Coast (Vasm)",
                  odds: 1.7,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "64": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok)",
                  odds: 1.45,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm)",
                  odds: 2.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "65": {
          specifiers: {
            "hcp=0:1": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (0:1)",
                  odds: 4.75,
                },
                {
                  active: true,
                  name: "draw (0:1)",
                  odds: 3.45,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (0:1)",
                  odds: 1.75,
                },
              ],
            },
            "hcp=1:0": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (1:0)",
                  odds: 1.25,
                },
                {
                  active: true,
                  name: "draw (1:0)",
                  odds: 5.25,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (1:0)",
                  odds: 13.25,
                },
              ],
            },
          },
          outcomesPerLine: 3,
        },
        "66": {
          specifiers: {
            "hcp=-0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "Denmark (Teok) (-0.5)",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "Ivory Coast (Vasm) (+0.5)",
                  odds: 1.75,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "68": {
          specifiers: {
            "total=1.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 1.5",
                  odds: 2.05,
                },
                {
                  active: true,
                  name: "over 1.5",
                  odds: 1.75,
                },
              ],
            },
            "total=2.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 2.5",
                  odds: 1.3,
                },
                {
                  active: true,
                  name: "over 2.5",
                  odds: 3.45,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "69": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 2.8,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.4,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "70": {
          specifiers: {
            "total=0.5": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "under 0.5",
                  odds: 1.85,
                },
                {
                  active: true,
                  name: "over 0.5",
                  odds: 1.9,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "72": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 2.75,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.4,
                },
                {
                  active: true,
                  name: "2",
                  odds: 4.25,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 9.25,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "73": {
          specifiers: {
            "variant=sr:exact_goals:3+": {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "0",
                  odds: 1.8,
                },
                {
                  active: true,
                  name: "1",
                  odds: 2.55,
                },
                {
                  active: true,
                  name: "2",
                  odds: 7.25,
                },
                {
                  active: true,
                  name: "3+",
                  odds: 29,
                },
              ],
            },
          },
          outcomesPerLine: 4,
        },
        "879": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 3.85,
                },
                {
                  active: true,
                  name: "no",
                  odds: 1.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "880": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.65,
                },
                {
                  active: true,
                  name: "no",
                  odds: 2.25,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
        "881": {
          specifiers: {
            default: {
              status: 1,
              outcomes: [
                {
                  active: true,
                  name: "yes",
                  odds: 1.18,
                },
                {
                  active: true,
                  name: "no",
                  odds: 4.6,
                },
              ],
            },
          },
          outcomesPerLine: 2,
        },
      },
    },
  ],
};

export default feed;
