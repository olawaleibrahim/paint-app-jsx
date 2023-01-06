import React from "react";

export const Intro= ({ init, isReady }) => {
  return (
    <header className={isReady ? "hidden intro" : "intro"}>
      <div className="intro__content">
        <button onClick={init} className="blob-btn">
          <span className="blob-text">Start painting</span>
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </div>
    </header>
  );
};