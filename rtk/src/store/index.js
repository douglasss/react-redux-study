import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
  name: 'song',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
});

const startingState = store.getState();
console.log(JSON.stringify(startingState));

// Without Action creators
// store.dispatch({
//   type: 'song/addSong',
//   payload: 'New Song!!!',
// });

//With action creators, just a shortcut for the same thing
store.dispatch(songsSlice.actions.addSong('Some song!'));

const finalState = store.getState();
console.log(JSON.stringify(finalState));
