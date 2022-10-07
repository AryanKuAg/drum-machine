import React from "react";

function DrumPad({ innerText ,event}) {
  const playAudio = audio => {
    event(innerText)
    const audioToPlay = new Audio(`audio/${innerText}.wav`);
    audioToPlay.play();
  }


  return (
    <div className="drum-pad w-full h-full bg-[#393E46] flex justify-center items-center text-2xl rounded-md cursor-pointer" id={innerText} onClick={playAudio}>
      <audio>     
  
  <source src={`audio/${innerText}.wav`} type="audio/wav" className="clip" id={innerText}/>


      </audio>
      <p className="text-[#fff]">{innerText}</p>
    </div>
  );
}

export default DrumPad;
