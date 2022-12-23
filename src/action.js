import { createAction } from '@reduxjs/toolkit';

export const addToDo = createAction('ADD');
export const deleteToDo = createAction('DELETE');

// export const ADD = 'ADD';
// export const DELETE = 'DELETE';

// export const addToDo = (text) => {
// 	console.log('add action!');
// 	return {
// 		type: ADD,
// 		text,
// 	};
// };

// export const deleteToDo = (id) => {
// 	console.log('delete action!');
// 	return {
// 		type: DELETE,
// 		id,
// 	};
// };
