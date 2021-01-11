import { useEffect, useState } from "react";

function getPageQuery() {
  const searchParams = new URLSearchParams(window.location.search);
  const pageQuery = searchParams.get("page");

  return pageQuery === null ? 1 : parseInt(pageQuery, 10);
}

const defaultPage = getPageQuery();

function usePage(): [number, (page: number) => void] {
  const [page, setPage] = useState(defaultPage);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", page.toString());

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
