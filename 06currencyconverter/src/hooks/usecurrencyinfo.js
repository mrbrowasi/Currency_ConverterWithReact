import {useEffect, useState } from "react";

function usecurrencyinfo(currency) {
  const [data, setdata] = useState({});

  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency.toLowerCase()}.json`
    )
      .then((res) => {
        if (!res.ok) throw new Error("API request failed");
        return res.json();
      })
      .then((res) => {
        setdata(res[currency.toLowerCase()] || {});
      })
      .catch((error) => {
        console.error("Currency API error:", error);
        setdata({});
      });
  }, [currency]);

  return data;

}

export default usecurrencyinfo;