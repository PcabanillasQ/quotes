import React, { useEffect } from "react";
import QuoteCard from "./QuoteCard";
import { gsap } from "gsap";

const QuoteList = ({ quotes, title }) => {
  if (title === "") {
    title = "Random";
  }

  useEffect(() => {
    const tlList = gsap.timeline();
    tlList.from(".quotes-title", { delay: 2.2, duration: 1, opacity: 0 });
    tlList.from(
      ".quote__card",
      {
        opacity: 0,
        y: -20,
        duration: 0.7,
        ease: "back.out(2)",
        stagger: 0.2,
      },
      "-=0.5"
    );
  }, []);

  return (
    <main className="quotes">
      <div className="container">
        <h1 className="quotes-title">{title}</h1>
        <div className="quotes-list">
          <div>
            {quotes
              .filter((quote, i) => i % 2 === 0)
              .map((quote) => (
                <QuoteCard quote={quote} key={quote._id}></QuoteCard>
              ))}
          </div>
          <div>
            {quotes
              .filter((quote, i) => i % 2 !== 0)
              .map((quote) => (
                <QuoteCard quote={quote} key={quote._id}></QuoteCard>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuoteList;
