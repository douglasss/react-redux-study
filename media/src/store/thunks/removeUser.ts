import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from '../../types/user';

export const removeUser = createAsyncThunk(
  'user/remove',
  async (user: User) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);
    return user;
  }
);
