import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Book } from "./Book";

export function BookList({ bookList, setBookList }) {
  //const bookList = INITIAL_BOOK_LIST;
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className="add-book-form">
        <TextField
          label="Name"
          variant="outlined"
          onChange={(event) => setName(event.target.value)} />

        <TextField
          label="Poster"
          variant="outlined"
          onChange={(event) => setPoster(event.target.value)} />
        <TextField
          label="Rating"
          variant="outlined"
          onChange={(event) => setRating(event.target.value)} />
        <TextField
          label="Summary"
          variant="outlined"
          onChange={(event) => setSummary(event.target.value)} />

        {/* copy the bookList and newbook */}

        <Button
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
          }}
        >
          Add Book
        </Button>

        {/* <button
              onClick={() => {
                const newBook = {
                  name: name,
                  poster: poster,
                  rating: rating,
                  summary: summary,
                };
                setBookList([...bookList, newBook]);
              }}
            >
              Add Book
            </button> */}
      </div>

      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
