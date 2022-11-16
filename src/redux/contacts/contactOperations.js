import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
   async () => {
      try {
         const { data } = await axios.get('/contacts');
         return data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const addContact = createAsyncThunk('contacts/addContact',
   async newContact => {
      try {
         const { data } = await axios.post('/contacts', newContact);
         toast.success(`Done`);
         return data;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const deleteContact = createAsyncThunk('contacts/deleteContact',
   async contactId => {
      try {
         await axios.delete(`/contacts/${contactId}`);
         toast.success(`Deleted`);
         return contactId;
      } catch (error) {
         console.log(error.message);
      }
   }
);

export const editContact = createAsyncThunk('contacts/changeContact',
   async ({ id, name, number }) => {
      try {
         const { data } = await axios.patch(`/contacts/${id}`, {
            name,
            number,
         });
         toast.success(`Contact changed.`);
         return data;
      } catch (error) {
         console.log(error.message);
      }
   }
);