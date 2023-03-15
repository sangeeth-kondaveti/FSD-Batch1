import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <AddColor />
    </div>
  );
  //JSX ends
}

function AddColor() {
  //let color = "crimson"
  const [color, setColor] = useState("skyblue");
  //const colorList = ["orange", "pink", "red", "purple"];
  const [colorList, setColorList] = useState([
    "orange",
    "pink",
    "red",
    "purple",
  ]);
  const styles = {
    backgroundColor: color,
  };
  return (
    <div>
      <div className="add-color">
        <input
          value={color}
          style={styles}
          type="text"
          onChange={(event) => setColor(event.target.value)}
        />
        {/* copy the colorList and newColor */}
        <button
          onClick={() => {
            setColorList([...colorList, color]);
            console.log(colorList);
            console.log(color);
          }}
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}

function ColorBox({ color }) {
  const styles = {
    height: "30px",
    width: "170px",
    backgroundColor: color,
  };
  return <div style={styles}></div>;
}

function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      {/* camelCase */}
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button>
    </div>
  );
}

function Msg({ name, pic }) {
  return (
    <div>
      <img className="profile-pic" src={pic} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

function Welcome({ name, age }) {
  return (
    <div>
      <h1>
        Hello {name} {age}
      </h1>
    </div>
  );
}
//props - object
//{} - template syntax
