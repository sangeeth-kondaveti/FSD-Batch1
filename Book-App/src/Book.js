import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Counter } from "./Counter";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";

export function Book({ book, id, deleteButton, editButton }) {
  const [show, setShow] = useState(true);
  //conditional styling
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };
  const summaryStyle = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();
  // true - visible - block;
  // false - hide - none;
  return (
    <div>
      <div className="book-container">
        <img className="book-poster" src={book.poster} alt={book.name} />
        <div className="book-spec">
          <h2 className="book-name">
            {book.name}-{id}
          </h2>
          <p style={styles} className="book-rating">
            ⭐{book.rating}
          </p>
        </div>
        <IconButton
          aria-label="toggle-description"
          color="primary"
          onClick={() => setShow(!show)}
        >
          {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
        <IconButton
          aria-label="info"
          color="primary"
          onClick={() => navigate(`/books/${id}`)}
        >
          <InfoIcon />
        </IconButton>

        {/* <button onClick={() => setShow(!show)}>Toggle description</button> */}
        {/* <button onClick={() => navigate("/books/" + id)}>Info</button> */}
        {/* <p style={summaryStyle} className="book-summary">
              {book.summary}
            </p> */}
        {show ? <p className="book-summary">{book.summary}</p> : ""}
        <div className="icon-style">
          <Counter />
          {deleteButton} {editButton}
        </div>
      </div>
    </div>
  );
}
