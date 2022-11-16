import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
   set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
   },
   unset() {
      axios.defaults.headers.common.Authorization = '';
   },
}

export const register = createAsyncThunk('auth/register', async credentials => {
	try {
		const { data } = await axios.post('/users/signup', credentials);
		 toast.success(`Sign up!`);
         token.set(data.token);
		return data;
	} catch (error) {
		console.log(error.message);
	}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
	try {
		const { data } = await axios.post('/users/login', credentials);
		 toast.success(`Login!`);
         token.set(data.token);
		return data;
	} catch (error) {
		console.log(error.message);
	}
});

export const logOut = createAsyncThunk('auth/logout', async () => {
   try {
      await axios.post('/users/logout');
      token.unset();
      toast.success(`Logout!`);
      } catch (error) {
	   console.log(error.message);
   }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh',
   async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
         return thunkAPI.rejectWithValue();
      }

      token.set(persistedToken);

      try {
         const { data } = await axios.get('/users/current');
         return data;
      } catch (error) {}
   }
);