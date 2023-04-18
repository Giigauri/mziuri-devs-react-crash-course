import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITodo } from './interfaces/todo.interface';
import { getTodos } from './thunks/get-todos.thunk';

interface ITodoInitialState {
	todos: ITodo[];
	todosLoading: boolean;
}

const initialState: ITodoInitialState = {
	todos: [],
	todosLoading: false,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		removeTodoById: (state, action: PayloadAction<number>) => {
			state.todos.filter((todo) => todo.id !== action.payload);
		},
		clearState: () => {
			return initialState;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getTodos.fulfilled, (state, action) => {
			state.todos = action.payload;
			state.todosLoading = false;
		});
		builder.addCase(getTodos.pending, (state) => {
			state.todosLoading = true;
		});
		builder.addCase(getTodos.rejected, (state) => {
			state.todos = [];
			state.todosLoading = false;
		});
	},
});

export const { removeTodoById, clearState } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
