import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

export default function BookCreate() {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}
