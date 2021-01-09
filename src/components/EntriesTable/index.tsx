import { Suspense } from "react";
import EntriesTableContainer from "./EntriesTableContainer";
import EntriesTableSuspended from "./EntriesTableSuspended";
import "./index.scss";

function EntriesTableContainerWrapper() {
  return (
    <Suspense fallback={<EntriesTableSuspended />}>
      <EntriesTableContainer />
    </Suspense>
  );
}

export default EntriesTableContainerWrapper;
