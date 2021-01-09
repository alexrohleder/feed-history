import { useState } from "react";
import ReactPaginate from "react-paginate";
import useSWR from "swr";
import EntriesTable from "./EntriesTable";

function EntriesTableContainer() {
  const [page, setPage] = useState(0);
  const feed = useSWR<Feed>(`feed?page=${page}`);
  const event = useSWR<SportEvent>("event");

  return (
    <div className="EntriesTableContainer">
      <EntriesTable
        entries={feed.data!.entries}
        markets={event.data!.markets}
      />
      <div className="EntriesTableFooter">
        <ReactPaginate
          forcePage={page}
          pageCount={feed.data!.pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => setPage(selected)}
        />
      </div>
    </div>
  );
}

export default EntriesTableContainer;
