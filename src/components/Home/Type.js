import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Innovating with purpose — Evolving through code, creativity, and curiosity",
        ],
        autoStart: true,
        loop: true,
        delay: 30,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
