import { useEffect } from 'react';
import { useFetchData } from '../common/hooks/useFetchData.hook';
import { User } from '../components/user/User';
import { IUser } from '../components/user/interfaces/user.interface';
import { getTodos } from '../state/features/todo/thunks/get-todos.thunk';
import { useAppDispatch } from '../state/hooks/useAppDispatch.hook';
import { useAppSelector } from '../state/hooks/useAppSelector.hook';
import { GetTodosRequestType } from '../state/features/todo/enums/get-todos-request-type.enum';

export const UsersPage: React.FC = () => {
	const { data, error, isEmpty, loading, addItem } = useFetchData<IUser>(
		'https://jsonplaceholder.typicode.com/users'
	);

	const { todos, todosLoading, userTodos, userTodosLoading } = useAppSelector((state) => state.todo);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(
			getTodos({
				requestType: GetTodosRequestType.GET_USER_TODOS,
				userId: 1,
			})
		);
	}, []);

	useEffect(() => {
		console.log('TODOS LOADIN: ', todosLoading);
		console.log('TODOS: ', todos.length);

		console.log('USER TODOS LOADIN: ', userTodosLoading);
		console.log('USER TODOS: ', userTodos.length);

		console.log('END PROCESS');
	}, [todos, todosLoading, userTodos, userTodosLoading]);

	return (
		<div className="users-list">
			{data.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};
