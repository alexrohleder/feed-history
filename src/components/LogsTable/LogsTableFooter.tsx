import ReactPaginate from "react-paginate";
import "./LogsTableFooter.scss";

type Props = {
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
};

function LogsTableFooter(props: Props) {
  return (
    <div className="LogsTableFooter">
      <ReactPaginate
        forcePage={props.page}
        pageCount={props.pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => props.setPage(selected)}
      />
    </div>
  );
}

export default LogsTableFooter;
