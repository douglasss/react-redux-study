import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
} from '@reduxjs/toolkit';
import { addCar } from './carsSlice';
// import { addCar } from './carsSlice';

export interface State {
  name: string;
  cost: number;
}

export interface Reducers extends SliceCaseReducers<State> {
  changeName: (state: State, action: PayloadAction<string>) => void;
  changeCost: (state: State, action: PayloadAction<number>) => void;
}

const formSlice = createSlice<State, Reducers, 'form'>({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, (state) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
