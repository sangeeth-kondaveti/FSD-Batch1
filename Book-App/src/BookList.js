import { Book } from "./Book";
import { useEffect, useState } from "react";
import { API } from "./global";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([]);

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBookList(data);
      });
  };

  //callback func, []=> dependancy array
  useEffect(() => getBooks(), []);

  return (
    <div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book
            key={bk.id}
            book={bk}
            id={bk.id}
            deleteButton={
              <IconButton
                aria-label="delete"
                color="error"
                onClick={() => {
                  fetch(`${API}/books/${bk.id}`, {
                    method: "DELETE",
                  }).then(() => getBooks());
                }}
              >
                <DeleteIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}
