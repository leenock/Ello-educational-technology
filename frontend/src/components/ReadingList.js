import React from "react";
import {
  Grid,
  Button,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Paper,
  Box,
} from "@mui/material";

const ReadingList = ({ books, onRemove }) => {
  return (
    <Grid container spacing={2}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper
            elevation={3}
            style={{ padding: "16px", position: "relative" }}
          >
            <ListItem>
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
                primary={<Typography variant="h6">{book.title}</Typography>}
                secondary={`Author: ${book.author}`}
              />
            </ListItem>
            <br></br>
            <Box display="flex" justifyContent="flex-end" mt={2}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#F76434",
                  color: "white",
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                }}
                onClick={() => onRemove(book)}
              >
                Remove
              </Button>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
