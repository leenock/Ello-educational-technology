import { useState, useEffect } from 'react';

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            books {
              title
              author
              coverPhotoURL
              readingLevel
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => setBooks(data.data.books));
  }, []);

  return books;
};

export default useBooks;
