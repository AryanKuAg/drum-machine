import React from "react";

function DrumPad({ innerText }) {
  return (
    <div className="drum-pad w-full h-full bg-red-400 flex justify-center items-center text-2xl rounded-md">
      <p>{innerText}</p>
    </div>
  );
}

export default DrumPad;
