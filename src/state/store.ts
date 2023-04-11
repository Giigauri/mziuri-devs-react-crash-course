import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './features/product/product.slice';
import { todoReducer } from './features/todo/todo.slice';

export const store = configureStore({
	reducer: {
		product: productReducer,
		todo: todoReducer,
	},
});
