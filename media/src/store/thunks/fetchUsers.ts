import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/user';

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get<User[]>('http://localhost:3005/users');
  // DEV ONLY !!!
  await pause(1000);
  return response.data;
});

// DEV ONLY !!!
const pause = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};
