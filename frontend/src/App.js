import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ReadingList from "./components/ReadingList";
import SearchBar from "./components/SearchBar";
import useBooks from "./hooks/useBooks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  const books = useBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, books]);

  const handleAdd = (book) => {
    if (!readingList.some((item) => item.title === book.title)) {
      setReadingList([...readingList, book]);
    }
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleRemove = (bookToRemove) => {
    setReadingList(readingList.filter((book) => book !== bookToRemove));
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <CssBaseline />
      <Container>
        <Header />
        <br />
        <Typography variant="h5" gutterBottom>
          Search Book
        </Typography>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchResults={searchResults}
          handleAdd={handleAdd}
        />
        <br />
        <Typography variant="h5" gutterBottom>
          Explore Ello reading sets
        </Typography>
        <ReadingList books={readingList} onRemove={handleRemove} />
        <br />
        <br />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
