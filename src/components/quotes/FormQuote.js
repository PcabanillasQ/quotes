import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "../Button";

const FormQuote = ({ setAuthor, setLoading, getQuotes }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef(null);
  const searchQuotes = () => {
    if (search !== "") {
      setAuthor(search);
      setLoading(true);
    } else {
      setError(true);
      tweenMsg.play();
      inputRef.current.focus();
    }
  };
  const randomQuotes = () => {
    setLoading(true);
    getQuotes();
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  gsap.set(".input-search__msg", { opacity: 0, x: -20 });
  const tweenMsg = gsap.to(".input-search__msg", {
    delay: 0.1,
    opacity: 1,
    x: 0,
    duration: 0.5,
    paused: true,
  });

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "back.out(1.4)" },
    });
    tl.set(".form", { height: 2 });
    tl.from(".form", {
      delay: 0.5,
      duration: 1.5,
      width: 0,
    });
    tl.from(".form", {
      height: 2,
    });
    tl.set(".form", { width: "100%", height: "fit-content" });
    tl.from(
      ".input-search, Button",
      {
        duration: 0.2,
        opacity: 0,
        scale: 0.9,
        y: 30,
        ease: "back.out",
        stagger: 0.01,
      },
      "-=.4"
    );
  }, []);

  return (
    <div className="form">
      <div className="container">
        <div className="form-search">
          <div className="input-search">
            <div className="input-search__item">
              <input
                type="text"
                placeholder="author name"
                ref={inputRef}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    searchQuotes();
                  }
                }}
              />
              <span className="material-icons">search</span>
            </div>
            <span
              className="input-search__msg"
              style={!error ? { display: "none" } : { display: "block" }}
            >
              * Please enter an author's name.
            </span>
          </div>
          <Button text="Search" color="primary" onClick={searchQuotes}></Button>
        </div>

        <Button
          text="Random"
          icon="autorenew"
          onClick={() => {
            randomQuotes("");
          }}
        />
      </div>
    </div>
  );
};

export default FormQuote;
