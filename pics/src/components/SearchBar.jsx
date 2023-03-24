import './SearchBar.css';
import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-bar-form" onSubmit={handleFormSubmit}>
        <label htmlFor="search">Enter search term</label>
        <input autoFocus name="search" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
