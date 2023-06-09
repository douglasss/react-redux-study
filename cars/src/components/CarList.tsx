import { useDispatch, useSelector } from 'react-redux';
import { Car, RootState, removeCar } from '../store';

export default function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ form, cars: { data, searchTerm } }: RootState) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        cars: filteredCars,
        name: form.name,
      };
    }
  );

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
