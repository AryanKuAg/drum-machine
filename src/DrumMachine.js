import React from "react";
import DrumPad from "./DrumPad";

function DrumMachine() {
  return (
    <div
      id="drum-machine"
      className="flex bg-gray-300 items-center gap-8 px-8 border-4 border-gray-100"
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-2 w-96 h-96 p-5 font-bold">
        {Array.from(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"], (x) => (
          <DrumPad innerText={x} />
        ))}
      </div>
      <div id="display" className="w-40 bg-gray-400 rounded-md p-2">
        DISPLAY
      </div>
    </div>
  );
}

export default DrumMachine;
