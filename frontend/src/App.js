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

  // filtering books based on the search term
  useEffect(() => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, books]);
  // Function adding a book
  const handleAdd = (book) => {
    if (!readingList.some((item) => item.title === book.title)) {
      setReadingList([...readingList, book]);
    }
    setSearchTerm("");
    setSearchResults([]);
  };
  // Function removing a book
  const handleRemove = (bookToRemove) => {
    setReadingList(readingList.filter((book) => book !== bookToRemove));
  };

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <CssBaseline />
      <Container style={{ marginBottom: "150px" }}>
        <Header />
        <br />
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          Search Book
        </Typography>
        <SearchBar
          searchTerm={searchTerm} //  text input by the user in the search bar.
          setSearchTerm={setSearchTerm} //  updating the search term as the user types in the search bar
          searchResults={searchResults} //  array of search results that match the current search term
          handleAdd={handleAdd} // add a selected book to the reading list & clear the search term and results.
        />
        <br />
        <Typography variant="h5" gutterBottom style={{ fontWeight: "bold" }}>
          Explore Ello reading sets
        </Typography>
        <ReadingList books={readingList} onRemove={handleRemove} />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
