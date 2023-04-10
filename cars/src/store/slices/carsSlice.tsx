import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
  nanoid,
} from '@reduxjs/toolkit';

export interface State {
  searchTerm: string;
  data: Car[];
}

export interface Reducers extends SliceCaseReducers<State> {
  changeSearchTerm: (state: State, action: PayloadAction<string>) => void;
  addCar: (state: State, action: PayloadAction<Car>) => void;
  removeCar: (state: State, action: PayloadAction<string | undefined>) => void;
}

export interface Car {
  id?: string;
  name: string;
  cost: number;
}

const carsSlice = createSlice<State, Reducers, 'cars'>({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, changeSearchTerm, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
