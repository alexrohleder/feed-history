import { format } from "date-fns";
import { useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import TreeMenu from "react-simple-tree-menu";
import useSWR from "swr";
import HeaderPanel from "./HeaderPanel";

function Header() {
  const { data } = useSWR<SportEvent>("event");
  const [isPanelVisible, setPanelVisibility] = useState(false);
  const [isSportTreeVisible, setSportTreeVisibility] = useState(false);

  const filterButtonCn = isPanelVisible
    ? "Header_ActionButton active"
    : "Header_ActionButton";

  return (
    <div className="HeaderContainer">
      <header className="Header">
        <div className="Header_Meta">
          <h1>Feed History</h1>
          <h2>{data!.name}</h2>
          <h3>{format(data!.timestamp, "dd/MM/Y HH:mm:ss")} UTC</h3>
          <button
            className="Header_ActionButton"
            onClick={() => setSportTreeVisibility(!isSportTreeVisible)}
          >
            ({data!.urn}){" "}
            {isSportTreeVisible ? <span>&#708;</span> : <span>&#709;</span>}
          </button>
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
            onClick={() => setPanelVisibility(!isPanelVisible)}
          >
            Filter
          </button>
        </div>
        {isPanelVisible && (
          <HeaderPanel
            markets={data!.markets}
            onClose={() => setPanelVisibility(false)}
          />
        )}
        {isSportTreeVisible && (
          <div className="HeaderPanel HeaderPanel_SportTree">
            <TreeMenu
              data={data!.sportTree}
              onClickItem={({ key: urn }) => {
                const currentSearch = window.location.search;
                const searchParams = new URLSearchParams(currentSearch);

                searchParams.set("event", urn.substr(urn.lastIndexOf("/")));

                window.location.href =
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  window.location.pathname +
                  "?" +
                  searchParams.toString();
              }}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
