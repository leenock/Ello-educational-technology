import { useState, useEffect } from 'react';

const getApiEndpoint = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:4000';
  } else {
    return '/api';
  }
};

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(getApiEndpoint(), {
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
