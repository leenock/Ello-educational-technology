import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import ReadingList from "./components/ReadingList";
import SearchBar from "./components/SearchBar";
import useBooks from "./hooks/useBooks";
import { Header } from "./components/Header";
import Footer from "./components/Footer";

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
    <Container>
      <Header />
      <Typography variant="h4" gutterBottom>
        Book Assignment View
      </Typography>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchResults={searchResults}
        handleAdd={handleAdd}
      />
      <Typography variant="h5" gutterBottom>
        Reading List
      </Typography>
      <ReadingList books={readingList} onRemove={handleRemove} />
      <Footer />
    </Container>
  );
};

export default App;
