import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteToDo } from '../action.js';
import { Link } from 'react-router-dom';

const Detail = () => {
	const id = useParams().id;
	const state = useSelector((state) => state);
	const toDo = state.find((toDo) => toDo.id === Number(id)); // 이때 filter를 쓰면 배열 안에 객체로 담겨서 배열을 벗겨줘야하지만 find를 쓰면 해당 요소만 반환하므로 더 편리하다.

	const time = new Date(toDo?.id).toLocaleString();

	const dispatch = useDispatch();
	const onBtnClick = () => {
		dispatch(deleteToDo(toDo.id));
		// home으로 이동
	};

	return (
		<>
			<h1>{toDo?.text}</h1>
			<h5>{toDo && `Created At: ${time}`}</h5>
			<Link to='/'>
				<button onClick={onBtnClick}>Del</button>
			</Link>
		</>
	);
};

export default Detail;
