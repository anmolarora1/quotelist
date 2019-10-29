import React from "react";
import QuotesContainer from "./QuotesContainer";
import "./quotes.scss";

export default function() {
  return (
    <div class="quotes">
      <div className="quotes-header" />
      <QuotesContainer />
    </div>
  );
}
