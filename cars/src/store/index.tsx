import { configureStore } from '@reduxjs/toolkit';
import {
  addCar,
  carsReducer,
  changeSearchTerm,
  removeCar,
  State as CarsState,
  Car,
} from './slices/carsSlice';
import {
  changeCost,
  changeName,
  formReducer,
  State as FormState,
} from './slices/formSlice';

export interface RootState {
  cars: CarsState;
  form: FormState;
}

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export type { Car };

export { store, addCar, changeSearchTerm, removeCar, changeCost, changeName };
