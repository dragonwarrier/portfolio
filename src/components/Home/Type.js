import React from "react";
import Typewriter from "typewriter-effect";
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer with 6+ years"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural',
      }}
    />
  );
}
export default Type;