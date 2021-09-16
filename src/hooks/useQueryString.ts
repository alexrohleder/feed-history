import qs from "qs";
import { useState } from "react";

const setQueryStringWithoutPageReload = (qsValue: string) => {
  const newurl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    qsValue;

  window.history.pushState({ path: newurl }, "", newurl);
};

const setQueryStringValue = (
  key: string,
  value: string,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString.replace(/^\?/, ""));
  const newQsValue = qs.stringify({ ...values, [key]: value });
  setQueryStringWithoutPageReload(`?${newQsValue}`);
};

const getQueryStringValue = (
  key: string,
  queryString = window.location.search
) => {
  const values = qs.parse(queryString);

  return values[key] as string;
};

const useQueryString = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(getQueryStringValue(key) || defaultValue);

  const update = (newValue: string) => {
    setValue(newValue);
    setQueryStringValue(key, newValue);
  };

  return [value, update] as const;
};

export default useQueryString;
