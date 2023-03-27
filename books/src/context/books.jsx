import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    setBooks(books.filter((book) => book.id !== id));
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    setBooks([...books, response.data]);
  };

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      })
    );
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        fetchBooks,
        deleteBookById,
        createBook,
        editBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
