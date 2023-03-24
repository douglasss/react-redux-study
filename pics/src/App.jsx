import SearchBar from './components/SearchBar';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList.jsx';

export default function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setImages(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
