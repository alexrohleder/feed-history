import { SWRConfig } from "swr";
import BaseHeader from "./components/BaseHeader";
import FilterDialog from "./components/FilterDialog/FilterDialog";
import LogsTable from "./components/LogsTable";

const searchParams = new URLSearchParams(window.location.search);
const event = searchParams.get("event");

const config = {
  fetcher: async (key: "event" | "feed") => {
    if (process.env.NODE_ENV === "development") {
      try {
        const { default: fixture } = await import(`./${key}.fixture`);

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
        <BaseHeader />
        <LogsTable />
        <FilterDialog />
      </SWRConfig>
    </div>
  );
}

export default App;
