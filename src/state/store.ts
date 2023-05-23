import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './features/user/user.slice';
import { authReducer } from './features/auth/auth.slice';
import { brandReducer } from './features/brand/brand.slice';
import { categoryReducer } from './features/menu/category/category.slice';
import { subCategoryReducer } from './features/menu/sub-category/sub-category.slice';

import logger from 'redux-logger';

export const store = configureStore({
	reducer: {
		user: userReducer,
		auth: authReducer,
		brand: brandReducer,
		category: categoryReducer,
		subCategory: subCategoryReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
	devTools: process.env.NODE_ENV !== 'production',
});
