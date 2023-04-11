import { useParams } from 'react-router-dom';
import { useFetchData } from '../common/hooks/useFetchData.hook';
import { ITodo } from '../components/todo/interfaces/todo.interface';
import { Todo } from '../components/todo/Todo';

export const UserPage: React.FC = () => {
	const params = useParams();

	const { data, error, isEmpty, loading, addItem } = useFetchData<ITodo>(
		`https://jsonplaceholder.typicode.com/todos?userId=${params.id}`
	);

	return (
		<div className="user-details">
			{data.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	);
};
