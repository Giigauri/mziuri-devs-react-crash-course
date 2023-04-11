import { createSlice } from '@reduxjs/toolkit';
import { ITodo } from './interfaces/todo.interface';
import { getTodos } from './thunks/get-todos.thunk';
import { GetTodosRequestType } from './enums/get-todos-request-type.enum';

interface ITodoInitialState {
	todos: ITodo[];
	userTodos: ITodo[];
	userTodosLoading: boolean;
	todosLoading: boolean;
}

const initialState: ITodoInitialState = {
	todos: [],
	todosLoading: false,
	userTodos: [],
	userTodosLoading: false,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTodos.fulfilled, (state, action) => {
			if (action.meta.arg.requestType === GetTodosRequestType.GET_USER_TODOS) {
				state.userTodos = action.payload;
				state.userTodosLoading = false;
			} else {
				state.todos = action.payload;
				state.todosLoading = false;
			}
		});
		builder.addCase(getTodos.pending, (state, action) => {
			if (action.meta.arg.requestType === GetTodosRequestType.GET_USER_TODOS) {
				state.userTodosLoading = true;
			} else {
				state.todosLoading = true;
			}
		});
		builder.addCase(getTodos.rejected, (state, action) => {
			if (action.meta.arg.requestType === GetTodosRequestType.GET_USER_TODOS) {
				state.userTodos = [];
				state.userTodosLoading = false;
			} else {
				state.todos = [];
				state.todosLoading = false;
			}
		});
	},
});

export const {} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
