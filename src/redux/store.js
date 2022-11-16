import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import contactsReduser from './contacts/contactSlice';
import storage from 'redux-persist/lib/storage';

import {
   persistStore,
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist';

const persistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token'],
};

export const store = configureStore({
   reducer: {
      auth: persistReducer(persistConfig, authSlice),
      contacts: contactsReduser,
   },
   middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
   ],
   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);