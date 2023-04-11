import { useDispatch, useSelector } from 'react-redux';
import { RootState, changeSearchTerm } from '../store';
import { ChangeEvent } from 'react';

export default function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}
