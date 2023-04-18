import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './features/todo/todo.slice';
import { userReducer } from './features/user/user.slice';
import { authReducer } from './features/auth/auth.slice';

import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		todo: todoReducer,
		user: userReducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});
