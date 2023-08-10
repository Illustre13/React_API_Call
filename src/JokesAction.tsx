import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchApiCategories = createAsyncThunk('jokes/categories', async () => {
  const response = await axios.get('https://api.chucknorris.io/jokes/categories');
  console.log(response.data);
  return response.data;

});
export const fetchApiRandom = createAsyncThunk('jokes/random', async () => {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');
    console.log(response.data);
    return response.data;
  
  });
