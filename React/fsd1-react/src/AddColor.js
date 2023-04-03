import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
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
          onChange={(event) => setColor(event.target.value)} />
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
