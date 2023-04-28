import { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  useEffect(() => {
    console.log("Total Click", like + dislike);
  }, [like, dislike]);

  return (
    <div>
      {/* camelCase */}
      <IconButton
        aria-label="like-btn"
        color="primary"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="dislike-btn"
        color="error"
        onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>

      {/* <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setDislike(dislike + 1)}>👎 {dislike}</button> */}
    </div>
  );
}
