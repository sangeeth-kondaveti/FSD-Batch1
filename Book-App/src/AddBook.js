import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

//name - required
//poster  - min 10, required
//rating - 1-10, required,
//summary - min 10 chars, required
//trailer - min 4, required

const BookValidationSchema = yup.object({
  name: yup.string().required("Why not fill the name"),
  poster: yup
    .string()
    .min(10, "Need a longer poster")
    .required("Why not fill the poster"),
  rating: yup
    .number()
    .min(1, "Need a higher rating")
    .max(10, "Too much rating")
    .required("Why not fill the rating"),
  summary: yup
    .string()
    .min(10, "Need a longer summary")
    .required("Why not fill the summary"),
  trailer: yup
    .string()
    .min(4, "Need a longer trailer")
    .required("Why not fill the trailer"),
});

export function AddBook() {
  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      rating: "",
      summary: "",
      trailer: "",
    },
    validationSchema: BookValidationSchema,
    onSubmit: (newBook) => {
      console.log("onSubmit", newBook);
      createBook(newBook);
    },
  });

  const navigate = useNavigate();

  const createBook = (newBook) => {
    fetch(`${API}/books`, {
      method: "POST",
      body: JSON.stringify(newBook),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then(() => navigate("/books"));
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="add-book-form">
        <TextField
          label="Name"
          variant="outlined"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error
          helperText={"nice"}
        />
        {formik.touched.name && formik.errors.name ? formik.errors.name : ""}

        <TextField
          label="Poster"
          variant="outlined"
          id="poster"
          name="poster"
          type="text"
          placeholder="Poster"
          value={formik.values.poster}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.poster && formik.errors.poster
          ? formik.errors.poster
          : ""}

        <TextField
          label="Rating"
          variant="outlined"
          id="rating"
          name="rating"
          type="number"
          placeholder="Rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.rating && formik.errors.rating
          ? formik.errors.rating
          : ""}

        <TextField
          label="Summary"
          variant="outlined"
          id="summary"
          name="summary"
          type="text"
          placeholder="Summary"
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.summary && formik.errors.summary
          ? formik.errors.summary
          : ""}

        <TextField
          label="Trailer"
          variant="outlined"
          id="trailer"
          name="trailer"
          type="text"
          placeholder="Trailer"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.trailer && formik.errors.trailer
          ? formik.errors.trailer
          : ""}

        {/* copy the bookList and newbook */}

        <Button
          variant="contained"
          onClick={createBook}
          type="submit"
          // onClick={() => {
          //   const newBook = {
          //     name: name,
          //     poster: poster,
          //     rating: rating,
          //     summary: summary,
          //     trailer: trailer,
          //   };
          //   //1. method -POST
          //   //2. body - data -JSON.stringify
          //   //3. headers - JSON

          //   fetch(`${API}/books`, {
          //     method: "POST",
          //     body: JSON.stringify(newBook),
          //     headers: { "Content-Type": "application/json" },
          //   })
          //     .then((data) => data.json())
          //     .then(() => navigate("/books"));
          //   //currently post and navigate is immediate
          //   // When post is completed -> navigate=> /books

          //   // setBookList([...bookList, newBook]);
          // }}
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
    </form>
  );
}
