import { useDispatch } from 'react-redux';
import { deleteToDo } from '../action.js';
import { Link } from 'react-router-dom';

export default function ToDo(toDo) {
	const dispatch = useDispatch();

	const onBtnClick = () => {
		dispatch(deleteToDo(toDo.id));
	};

	return (
		<li>
			<Link to={`/${toDo.id}`}>{toDo.text}</Link>
			<button onClick={onBtnClick}>Del</button>
		</li>
	);
}
