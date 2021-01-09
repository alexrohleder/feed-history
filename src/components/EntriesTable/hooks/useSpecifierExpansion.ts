import { useState } from "react";

const OUTCOME_BULK_SIZE = 3;

function useSpecifierExpansion() {
  const [state, setState] = useState<Record<string, number>>({});

  const isOutcomeIncreseable = (
    market: SportEventMarket,
    specifier: string
  ) => {
    const max = market.specifiers[specifier];
    const min = Math.min(max, OUTCOME_BULK_SIZE);
    const current = state[`${market.id}:${specifier}`] ?? min;

    return max > current;
  };

  const isOutcomeDecreaseable = (
    market: SportEventMarket,
    specifier: string
  ) => {
    const max = market.specifiers[specifier];
    const min = Math.min(max, OUTCOME_BULK_SIZE);
    const current = state[`${market.id}:${specifier}`] ?? min;

    return min < current;
  };

  return {
    getVisibleOutcomeCount(market: SportEventMarket, specifier: string) {
      return market.specifiers[specifier] < OUTCOME_BULK_SIZE
        ? market.specifiers[specifier]
        : state[`${market.id}:${specifier}`] ?? OUTCOME_BULK_SIZE;
    },
    increaseOutcomeCount(market: SportEventMarket, specifier: string) {
      const token = `${market.id}:${specifier}`;

      const max = market.specifiers[specifier];
      const min = Math.min(max, OUTCOME_BULK_SIZE);
      const current = state[token] ?? min;

      setState({
        ...state,
        [token]:
          max > current ? Math.min(current + OUTCOME_BULK_SIZE, max) : max,
      });
    },
    decreaseOutcomeCount(market: SportEventMarket, specifier: string) {
      const token = `${market.id}:${specifier}`;

      const max = market.specifiers[specifier];
      const min = Math.min(max, OUTCOME_BULK_SIZE);
      const current = state[token] ?? min;

      setState({
        ...state,
        [token]:
          min < current ? Math.max(current - OUTCOME_BULK_SIZE, min) : min,
      });
    },
    isOutcomeIncreseable,
    isOutcomeDecreaseable,
  };
}

export default useSpecifierExpansion;
