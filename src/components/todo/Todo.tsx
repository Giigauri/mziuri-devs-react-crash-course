import { ITodo } from './interfaces/todo.interface';

type TodoProps = {
	todo: ITodo;
};

export const Todo: React.FC<TodoProps> = ({ todo }) => {
	return <h1>{todo.title}</h1>;
};
