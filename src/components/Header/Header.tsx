import { useEffect, useState } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import TreeMenu from "react-simple-tree-menu";
import useSWR from "swr";
import HeaderPanel from "./HeaderPanel";

function Header() {
  const { data } = useSWR<SportEvent>("event");
  const [isPanelVisible, setPanelVisibility] = useState(false);
  const [isSportTreeVisible, setSportTreeVisibility] = useState(false);

  useEffect(() => {
    if (isSportTreeVisible) {
      (document.querySelector(".rstm-search") as HTMLInputElement)?.focus();
    }
  }, [isSportTreeVisible]);

  return (
    <div className="HeaderContainer">
      <header className="Header">
        <div className="Header_Meta">
          <h1>Feed History</h1>
          <button
            className={
              isSportTreeVisible
                ? "Header_ActionButton active"
                : "Header_ActionButton"
            }
            onClick={() => setSportTreeVisibility(!isSportTreeVisible)}
          >
            <h2>{data!.name}</h2>
            <h3>{data!.timestamp} UTC</h3>({data!.urn})
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
            className={
              isPanelVisible
                ? "Header_ActionButton active"
                : "Header_ActionButton"
            }
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
