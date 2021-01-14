import { SWRConfig } from "swr";
import { Component } from 'react';
import EntriesTableContainer from "./components/EntriesTable";
import HeaderContainer from "./components/Header";
import { MarketSelectionContextProvider } from "./context/MarketSelectionContext";
import { SearchContextProvider } from "./context/SearchContext";

const searchParams = new URLSearchParams(window.location.search);
const event = searchParams.get("event");
const noDelay = searchParams.get("noDelay");

const config = {
  fetcher: async (key: string) => {
    if (process.env.NODE_ENV !== "test") {
      try {
        const page = key.includes("?")
          ? key.substring(0, key.indexOf("?"))
          : key;

        const { default: fixture } = await import(`./${page}.fixture`);

        console.log(`loaded ${page} from fixtures`);

        return new Promise((resolve) => {
          setTimeout(
            () => {
              resolve(fixture);
            },
            noDelay ? 0 : page === "event" ? 250 : 2500
          );
        });
      } catch (error) {
        // if a typescript reference error happen inside the dynamic imported
        // file it would be swallowed instead of fowarded, it happens only on dev.
        console.error(error);
      }
    }

    return fetch(`/api/${event}/${key}`).then((res) => res.json());
  },

  suspense: true,
  revalidateOnFocus: false,
};

class App extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="AppErrorBoundary">
          <div>Oops, something went wrong while fetching the data.</div>
        </div>
      );
    }

    return (
      <div className="App">
        <SWRConfig value={config}>
          <SearchContextProvider>
            <MarketSelectionContextProvider>
              <HeaderContainer />
              <EntriesTableContainer />
            </MarketSelectionContextProvider>
          </SearchContextProvider>
        </SWRConfig>
      </div>
    );
  }
}

export default App;
