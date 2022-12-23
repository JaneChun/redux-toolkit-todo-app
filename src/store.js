import { configureStore } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';

// ACTION
export const addToDo = createAction('ADD');
export const deleteToDo = createAction('DELETE');

// REDUCER
const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.unshift({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) => {
		return state.filter((toDo) => toDo.id !== action.payload);
	},
});

// STORE
export const store = configureStore({ reducer });
store.subscribe(() => console.log('getState', store.getState()));