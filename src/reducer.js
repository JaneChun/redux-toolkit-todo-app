import { createReducer } from '@reduxjs/toolkit';
import { addToDo, deleteToDo } from './action';

export const reducer = createReducer([], {
	[addToDo]: (state, action) => {
		state.unshift({ text: action.payload, id: Date.now() });
	},
	[deleteToDo]: (state, action) => {
		return state.filter((toDo) => toDo.id !== action.payload);
	},
});
