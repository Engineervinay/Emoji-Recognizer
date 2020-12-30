import React from "react";
import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smile",
  "😀": "Grinning Face",
  "🤣": "ROFL",
  "😋": "Tasty",
  "🤔": "Thinking"
};
var emojiDictionaryDetails = {
  "😊":
    "A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and warm, positive feelings.",
  "😀":
    "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.",
  "🤣":
    "A yellow face with a big grin and scrunched, X-shaped eyes, tilted on its side as if rolling on the floor laughing (the internet acronym ROFL). Sheds two tears and tilts right on most platforms. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy.",
  "😋":
    "A yellow face with smiling eyes and a broad, closed smile with its tongue sticking out of one corner, as if licking its lips in appetite or contentment. Widely used to convey that a food item is delicious. May also express that a person is attractive.",
  "🤔":
    "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking."
};
export default function App() {
  var [outText, setoutText] = useState("You didn't added any emoji!!");
  var [outTextDetailed, setoutTextDetailed] = useState();

  function performEmojify(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setoutText(meaning);
    var meaningDetailed = emojiDictionaryDetails[userInput];
    setoutTextDetailed(meaningDetailed);
  }
  return (
    <div className="App">
      <h1>Emoji Recognizer</h1>
      <input id="inputEmoji" onChange={performEmojify}></input>
      <div class="outText">{outText}</div>
      <div class="outTextDetailed">{outTextDetailed}</div>
    </div>
  );
}
