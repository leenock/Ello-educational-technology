import React from "react";
import {
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Paper,
  Button,
} from "@mui/material";

const SearchBar = ({ searchTerm, setSearchTerm, searchResults, handleAdd }) => {
  return (
    <div>
      <TextField
        fullWidth
        label="Search for books by title"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <Paper elevation={3} style={{ marginTop: "8px", padding: "8px" }}>
          <List>
            {searchResults.map((book, index) => (
              <ListItem
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ListItemAvatar>
                  <Avatar
                    src={require(`../assets/images/${book.coverPhotoURL
                      .split("/")
                      .pop()}`)}
                    alt={book.title}
                    variant="rounded"
                    style={{ width: 100, height: 100, marginRight: "16px" }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={book.title}
                  secondary={`Author: ${book.author}`}
                />
                <Button style={{backgroundColor: "#28B8B8"}}
                  variant="contained"
                  color="primary"
                  onClick={() => handleAdd(book)}
                >
                  Add book
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default SearchBar;
