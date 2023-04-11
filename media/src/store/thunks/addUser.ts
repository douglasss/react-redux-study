import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/user';
import { faker } from '@faker-js/faker';

export const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post<User>('http://localhost:3005/users', {
    name: faker.name.fullName(),
  });
  return response.data;
});
