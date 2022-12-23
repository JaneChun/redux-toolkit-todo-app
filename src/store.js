import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({ reducer });

store.subscribe(() => console.log('getState', store.getState()));
