import { useState } from "react";

const OUTCOME_BULK_SIZE = 3;

function useSpecifierExpansion() {
  const [state, setState] = useState<Record<string, number>>({});

  const compute = (market: SportEventMarket, specifier: string) => {
    const max = market.specifiers[specifier].length;
    const min = Math.min(max, OUTCOME_BULK_SIZE);
    const token = `${market.id}:${specifier}`;
    const current = state[token] ?? min;

    return { max, min, current, token };
  };

  return {
    count(market: SportEventMarket, specifier: string) {
      const max = market.specifiers[specifier].length;

      return max < OUTCOME_BULK_SIZE
        ? max
        : state[`${market.id}:${specifier}`] ?? OUTCOME_BULK_SIZE;
    },
    increase(market: SportEventMarket, specifier: string) {
      const { max, current, token } = compute(market, specifier);

      setState({
        ...state,
        [token]:
          max > current ? Math.min(current + OUTCOME_BULK_SIZE, max) : max,
      });
    },
    decrease(market: SportEventMarket, specifier: string) {
      const { min, current, token } = compute(market, specifier);

      setState({
        ...state,
        [token]:
          min < current ? Math.max(current - OUTCOME_BULK_SIZE, min) : min,
      });
    },
    isIncreasable(market: SportEventMarket, specifier: string) {
      const { max, current } = compute(market, specifier);

      return max > current;
    },
    isDecreasable(market: SportEventMarket, specifier: string) {
      const { min, current } = compute(market, specifier);

      return min < current;
    },
    canExpandTo(max: number) {
      return max > OUTCOME_BULK_SIZE;
    },
  };
}

export default useSpecifierExpansion;
