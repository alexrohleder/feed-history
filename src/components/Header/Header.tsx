import { format } from "date-fns";
import { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import useSWR from "swr";
import HeaderPanel from "./HeaderPanel";

function Header() {
  const { data } = useSWR<SportEvent>("event");
  const [isPanelOpen, setOpenPanel] = useState(false);

  const filterButtonCn = isPanelOpen
    ? "Header_ActionButton active"
    : "Header_ActionButton";

  return (
    <div className="HeaderContainer">
      <header className="Header">
        <div className="Header_Meta">
          <h1>Feed History</h1>
          <h2>{data!.name}</h2>
          <h3>{format(data!.timestamp, "dd/MM/Y HH:mm:ss")} UTC</h3>
          <h4>({data!.urn})</h4>
        </div>
        <div className="Header_Actions">
          <ReactHTMLTableToExcel
            table="table-to-xls"
            className="Header_ActionButton"
            filename={`uof-history-${data!.urn}`}
            sheet="uof history"
            buttonText="Download as XLS"
          />
          <button
            className={filterButtonCn}
            onClick={() => setOpenPanel(!isPanelOpen)}
          >
            Filter
          </button>
        </div>
        {isPanelOpen && (
          <HeaderPanel
            markets={data!.markets}
            onClose={() => setOpenPanel(false)}
          />
        )}
      </header>
    </div>
  );
}

export default Header;
