import { useDispatch, useSelector } from 'react-redux';
import { Car, RootState, removeCar } from '../store';

export default function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars.data);

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => (
    <div key={car.id} className="panel">
      <p>
        {car.name} - ${car.cost}
      </p>
      <button onClick={() => handleCarDelete(car)} className="button is-danger">
        Delete
      </button>
    </div>
  ));

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
