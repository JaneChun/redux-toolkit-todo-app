export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const addToDo = (text) => {
	console.log('add action!');
	return {
		type: ADD,
		text,
	};
};

export const deleteToDo = (id) => {
	console.log('delete action!');
	return {
		type: DELETE,
		id,
	};
};
