import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AddColor } from "./AddColor";
import { DisplayData } from "./DisplayData";
import { Home } from "./Home";
import { BookList } from "./BookList";
import { BookDetail } from "./BookDetail";
import { AddBook } from "./AddBook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import ExampleContext from "./ExampleContext";
import { NotFound } from "./NotFound";
import { EditBook } from "./EditBook";
import { BasicForm } from "./BasicForm";
import { TicTacToe } from "./TicTacToe";
const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 7.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-Link.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/san61qTwWsU",
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 6.9,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 9,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {
  //Lifting the state up - lifted from child to parent
  //1. creating - createContext ✅
  //2. Publisher - provider - context.Provider ✅
  //3. Subscriber - useContext - useContext(context) ❌
  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);

  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            <Button color="inherit" onClick={() => navigate("/books")}>
              BookList
            </Button>
            <Button color="inherit" onClick={() => navigate("/books/add")}>
              Add Book
            </Button>
            <Button color="inherit" onClick={() => navigate("/game")}>
              AddColor
            </Button>
            <Button color="inherit" onClick={() => navigate("/data")}>
              DisplayData
            </Button>
            <Button color="inherit" onClick={() => navigate("/context")}>
              Context
            </Button>
            <Button color="inherit" onClick={() => navigate("/basic-form")}>
              Basic Form
            </Button>
            <Button color="inherit" onClick={() => navigate("/tictactoe")}>
              Tic Tac Toe
            </Button>
            <Button
              style={{ marginLeft: "auto" }}
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
            >
              {mode === "light" ? "dark" : "light"} Mode
            </Button>
          </Toolbar>
        </AppBar>
        {/* <nav>
        <ul>
          <li>
            Link change page without refresh
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
          <li>
            <Link to="/books">Add Book</Link>
          </li>
          <li>
            <Link to="/game">AddColor</Link>
          </li>
          <li>
            <Link to="/data">DisplayData</Link>
          </li>
        </ul>
      </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookid" element={<BookDetail />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:bookid" element={<EditBook />} />
          <Route path="/game" element={<AddColor />} />
          <Route path="/data" element={<DisplayData />} />
          <Route path="/context" element={<ExampleContext />} />
          <Route path="/basic-form" element={<BasicForm />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/novel" element={<Navigate replace to="/books" />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
  //JSX ends
}


