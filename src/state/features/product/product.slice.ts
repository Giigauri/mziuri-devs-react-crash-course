import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from './interfaces/product.interface';

interface IProductInitialState {
	products: IProduct[];
	count: number;
}

const initialState: IProductInitialState = {
	products: [],
	count: 0,
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export const productReducer = productSlice.reducer;
