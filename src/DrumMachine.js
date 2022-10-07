import React, {useState} from "react";
import DrumPad from "./DrumPad";

function DrumMachine() {
  const [display, setDisplay] = useState(
    "DISPLAY"
  )

  return (
    <div
      id="drum-machine"
      className="flex bg-[#222831] items-center gap-8 px-8 border-4 border-[#393E46]"
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-2 w-96 h-96 p-5 font-bold">
        {Array.from(["Q", "W", "E", "A", "S", "D", "Z", "X", "C"], (x) => (
          <DrumPad innerText={x} event={setDisplay}/>
        ))}
      </div>
      <div id="display" className="w-40 bg-gray-400 font-extrabold rounded-md p-2 text-center text-[#222831]">
        {display}
      </div>
    </div>
  );
}

export default DrumMachine;
