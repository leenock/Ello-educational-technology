import { useState, useEffect } from 'react';

const useBooks = () => {
  const [books, setBooks] = useState([]);
// http://localhost:4000/
//ngrok http http://localhost:4000
  useEffect(() => {
    fetch('https://6ba1-197-155-73-18.ngrok-free.app', {
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
