import React from "react";
import QuotesContainer from "./QuotesContainer";
import "./quotes.scss";

export default function () {
  return (
    <div className="quotes">
      <div className="quotes-header" />
      <QuotesContainer />
    </div>
  );
}
