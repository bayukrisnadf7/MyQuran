"use client";
import { useRef } from "react";
import { AiFillSound } from "react-icons/ai";
const Audio = ( { audio }) => {
    const audioReff = useRef(null)
    const playAudio = () => {
      audioReff.current.play()
    }
  return (
    <div className="mt-2">
      <audio src={audio} ref={audioReff}></audio>
      <button onClick={playAudio}><AiFillSound onClick={playAudio} size={20} /></button>
    </div>
  );
};
export default Audio;
