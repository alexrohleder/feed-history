import { SWRConfig } from "swr";
import BaseHeader from "./components/BaseHeader";
import FilterDialog from "./components/FilterDialog/FilterDialog";
import LogsTable from "./components/LogsTable";
import { MarketSelectionContextProvider } from "./context/MarketSelectionContext";

const searchParams = new URLSearchParams(window.location.search);
const event = searchParams.get("event");

const config = {
  fetcher: async (key: string) => {
    if (process.env.NODE_ENV === "development") {
      try {
        const page = key.includes("?")
          ? key.substring(0, key.indexOf("?"))
          : key;

        const { default: fixture } = await import(`./${page}.fixture`);

        console.log(`loaded ${page} from fixtures`);

        return fixture;
      } catch (error) {
        // if a typescript reference error happen inside the dynamic imported
        // file it would be swallowed instead of fowarded, it happens only on dev.
        console.error(error);
      }
    }

    return fetch(`/api/${event}/${key}`).then((res) => res.json());
  },
};

function App() {
  return (
    <div className="App">
      <SWRConfig value={config}>
        <MarketSelectionContextProvider>
          <BaseHeader />
          <LogsTable />
        </MarketSelectionContextProvider>
      </SWRConfig>
    </div>
  );
}

export default App;
