import React from "react";
import audio from "./image/audio.svg";

import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    let audio = props.phonetic.audio;
    let audioSound = new Audio(audio);
    audioSound.play();
  }

  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <ul className="list-unstyled">
          <li>
            <img
              className="Phonetic-audio-icon"
              src={audio}
              alt="Phonetic audio icon"
              onClick={playAudio}
            />
            <span>{props.phonetic.text}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
