import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";
import { useNavigate, useParams } from "react-router-dom";
export function EditBook() {
  const { bookid } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);

  return book ? <EditBookForm bookData={book} /> : "Loading....";
}

function EditBookForm({ bookData }) {
  console.log("BookData", bookData);
  const [name, setName] = useState(bookData.name);
  const [poster, setPoster] = useState(bookData.poster);
  const [rating, setRating] = useState(bookData.rating);
  const [summary, setSummary] = useState(bookData.summary);
  const [trailer, setTrailer] = useState(bookData.trailer);
  const navigate = useNavigate();
  return (
    <div className="add-book-form">
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        value={poster}
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        value={trailer}
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* copy the bookList and newbook */}

      <Button
        color="success"
        variant="contained"
        onClick={() => {
          const updatedBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //1. method -POST
          //2. body - data -JSON.stringify
          //3. headers - JSON

          fetch(`${API}/books/${bookData.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedBook),
            headers: { "Content-Type": "application/json" },
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));
          //currently post and navigate is immediate
          // When post is completed -> navigate=> /books

          // setBookList([...bookList, newBook]);
        }}
      >
        SAVE
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
  );
}
