import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";
import { API } from "./global";

export function BookDetail() {
  const { bookid } = useParams();
  const [book, setBook] = useState({});

  //console.log(bookList);
  // const book = bookList[bookid];
  // console.log(book);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="580"
        src={book.trailer}
        title="The Secret Documentary Trailer"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name}</h2>
          <p className="book-rating">⭐{book.rating}</p>
        </div>
        <p className="book-summary">{book.summary}</p>
        <Button
          variant="contained"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIosIcon />}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
