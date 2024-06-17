import { useState, useEffect } from 'react';

const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.ello_APP_BACKEND_URL}/`, {
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
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data.data.books);
      } catch (error) {
        console.error('Fetch error:', error);
        // Handle error state or logging as needed
      }
    };

    fetchData();
  }, []);

  return books;
};

export default useBooks;
