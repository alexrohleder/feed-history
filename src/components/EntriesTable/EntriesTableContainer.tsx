import ReactPaginate from "react-paginate";
import useSWR from "swr";
import EntriesTable from "./EntriesTable";
import usePage from "./hooks/usePage";

function EntriesTableContainer() {
  const [page, setPage] = usePage();
  const feed = useSWR<Feed>(`feed?page=${page}`);
  const event = useSWR<SportEvent>("event");

  return (
    <>
      <div className="EntriesTableContainer">
        <EntriesTable
          entries={feed.data!.entries}
          markets={event.data!.markets}
        />
      </div>
      <div className="EntriesTableFooter">
        <ReactPaginate
          forcePage={page}
          pageCount={feed.data!.pageCount}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => setPage(selected)}
        />
      </div>
    </>
  );
}

export default EntriesTableContainer;
