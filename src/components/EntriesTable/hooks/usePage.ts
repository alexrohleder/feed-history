import { useEffect, useState } from "react";

function getPageQuery() {
  const searchParams = new URLSearchParams(window.location.search);
  const pageQuery = searchParams.get("page");

  return pageQuery === null ? 0 : Math.max(parseInt(pageQuery, 10) - 1, 0);
}

const defaultPage = getPageQuery();

function usePage(): [number, (page: number) => void] {
  const [page, setPage] = useState(defaultPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const currentPage = searchParams.get("page");
    const newPage = (page + 1).toString();

    if (currentPage === newPage) {
      return;
    }

    searchParams.set("page", newPage);

    const path =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      searchParams.toString();

    window.history.pushState({ path }, "", path);
  }, [page]);

  useEffect(() => {
    const listener = () => setPage(getPageQuery());

    window.addEventListener("popstate", listener);

    return () => {
      window.removeEventListener("popstate", listener);
    };
  }, []);

  return [page, setPage];
}

export default usePage;
