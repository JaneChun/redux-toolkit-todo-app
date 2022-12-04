import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from '../action.js';
import ToDo from '../components/ToDo';

const Home = () => {
	const dispatch = useDispatch();
	const toDos = useSelector((state) => state);
	const [toDoInput, setToDoInput] = useState('');

	const onChange = (e) => {
		setToDoInput(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault(); // 새로고침 방지
		dispatch(addToDo(toDoInput));
		setToDoInput('');
	};

	return (
		<>
			<h1>To Dos</h1>
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={toDoInput} type='text' placeholder='Write to do' required />
				<button>Add</button>
			</form>

			<ul>
				{toDos.map((toDo) => (
					<ToDo {...toDo} key={toDo.id} />
				))}
			</ul>
		</>
	);
};

export default Home;
