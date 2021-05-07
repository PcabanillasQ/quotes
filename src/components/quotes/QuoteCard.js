import React from "react";
import QuoteTag from "./QuoteTag";

const QuoteCard = ({ quote }) => {
  const { quoteGenre, quoteText } = quote;
  return (
    <div className="quote__card">
      <QuoteTag quoteGenre={quoteGenre}></QuoteTag>

      <p>{quoteText}</p>
    </div>
  );
};

export default QuoteCard;
