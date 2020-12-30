import React from "react";
import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊️": "smile",
  "😀": "Grinning Face",
  "🤣": "ROFL",
  "😋": "Tasty",
  "🤔": "Thinking",
  "😃": " Grinning with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😂": "Face with Tears of Joy"
};
var emojiDictionaryDetails = {
  "😊️":
    "A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and warm, positive feelings.",
  "😀":
    "A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.",
  "🤣":
    "A yellow face with a big grin and scrunched, X-shaped eyes, tilted on its side as if rolling on the floor laughing (the internet acronym ROFL). Sheds two tears and tilts right on most platforms. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy.",
  "😋":
    "A yellow face with smiling eyes and a broad, closed smile with its tongue sticking out of one corner, as if licking its lips in appetite or contentment. Widely used to convey that a food item is delicious. May also express that a person is attractive.",
  "🤔":
    "A yellow face with furrowed eyebrows looking upwards with thumb and index finger resting on its chin. Intended to show a person pondering or deep in thought. Often used to question or scorn something or someone, as if saying Hmm, I don't know about that. Tone varies, including earnest, playful, puzzled, skeptical, and mocking.",
  "😃":
    "A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement.",
  "😄":
    "A yellow face with smiling eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general happiness and good-natured amusement.",
  "😆":
    "A yellow face with a broad, open smile and scrunched, X-shaped eyes. Often conveys excitement or hearty laughter.",
  "😅":
    "Has the same grin and eyes as 😄 Grinning Face With Smiling Eyes but with a single, blue bead of sweat, usually over its left eye. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead.",
  "😂":
    "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing."
};
export default function App() {
  var [outText, setoutText] = useState("You didn't enter any emoji!!");
  var [outTextDetailed, setoutTextDetailed] = useState();
  function clickHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setoutText(meaning);
    var meaningDetailed = emojiDictionaryDetails[userInput];
    setoutTextDetailed(meaningDetailed);
  }
  function performEmojify(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setoutText(meaning);
    var meaningDetailed = emojiDictionaryDetails[userInput];
    setoutTextDetailed(meaningDetailed);
    var meaningDetailed = emojiDictionaryDetails[userInput];
  }
  return (
    <div className="App">
      <h1>Emoji Recognizer</h1>
      <input
        id="inputEmoji"
        onChange={performEmojify}
        placeholder="Enter Emoji"
      />
      <br />
      <div class="outText">{outText}</div>

      <div class="emojiPallete">
        <button class="btn-emoji" value="😊️" onClick={clickHandler}>
          😊️
        </button>
        <button class="btn-emoji" value="😀" onClick={clickHandler}>
          😀
        </button>
        <button class="btn-emoji" value="🤣" onClick={clickHandler}>
          🤣
        </button>
        <button class="btn-emoji" value="😋" onClick={clickHandler}>
          😋
        </button>
        <button class="btn-emoji" value="🤔" onClick={clickHandler}>
          🤔
        </button>
      </div>
      <br />

      <div class="outTextDetailed">{outTextDetailed}</div>
    </div>
  );
}
