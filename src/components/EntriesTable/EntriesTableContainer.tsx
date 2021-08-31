import ReactPaginate from "react-paginate";
import useSWR from "swr";
import useQueryString from "../../hooks/useQueryString";
import EntriesTable from "./EntriesTable";
import usePage from "./hooks/usePage";

function EntriesTableContainer() {
  const [page, setPage] = usePage();
  const [pageSize, setPageSize] = useQueryString("pageSize", "50");
  const feed = useSWR<Feed>(`messages?pageIndex=${page}&pageSize=${pageSize}`);
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
          pageCount={feed.data!.totalPages}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => setPage(selected)}
        />
        <select
          value={pageSize}
          onChange={(event) => setPageSize(event.target.value)}
        >
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
        </select>
      </div>
    </>
  );
}

export default EntriesTableContainer;
