import { createSlice } from '@reduxjs/toolkit';
import { IBrand } from './interfaces/brand.interface';
import { getBrands } from './thunks/get-brands.thunk';
import { createBrand } from './thunks/create-brand.thunk';
import { updateBrand } from './thunks/update-brand.thunk';
import { deleteBrand } from './thunks/delete-brand.thunk';

interface IBrandInitialState {
	brands: IBrand[];
	loadingForBrands: boolean;
	loadingForCreateBrand: boolean;
	loadingForUpdateBrand: boolean;
	deleteBrandLoadingProcess: {
		active: boolean;
		id: string;
	};
}

const initialState: IBrandInitialState = {
	brands: [],
	loadingForBrands: false,
	loadingForCreateBrand: false,
	loadingForUpdateBrand: false,
	deleteBrandLoadingProcess: {
		active: false,
		id: null,
	},
};

export const brandSlice = createSlice({
	name: 'brand',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBrands.fulfilled, (state, action) => {
			state.brands = action.payload;
			state.loadingForBrands = false;
		});
		builder.addCase(getBrands.pending, (state) => {
			state.loadingForBrands = true;
		});
		builder.addCase(getBrands.rejected, (state) => {
			state.loadingForBrands = false;
		});

		builder.addCase(createBrand.fulfilled, (state, action) => {
			state.brands.unshift(action.payload);
			state.loadingForCreateBrand = false;
		});
		builder.addCase(createBrand.pending, (state) => {
			state.loadingForCreateBrand = true;
		});
		builder.addCase(createBrand.rejected, (state) => {
			state.loadingForCreateBrand = false;
		});

		builder.addCase(updateBrand.fulfilled, (state, action) => {
			const selected_index = state.brands.findIndex((brand) => String(brand._id) === String(action.payload._id));

			if (selected_index > -1) {
				state.brands[selected_index] = action.payload;
			}

			state.loadingForUpdateBrand = false;
		});
		builder.addCase(updateBrand.pending, (state) => {
			state.loadingForUpdateBrand = true;
		});
		builder.addCase(updateBrand.rejected, (state) => {
			state.loadingForUpdateBrand = false;
		});

		builder.addCase(deleteBrand.fulfilled, (state, action) => {
			if (action.payload) {
				state.brands.filter((brand) => String(brand._id) !== String(action.meta.arg));
			}

			state.deleteBrandLoadingProcess = {
				active: false,
				id: null,
			};
		});
		builder.addCase(deleteBrand.pending, (state, action) => {
			state.deleteBrandLoadingProcess = {
				active: true,
				id: action.meta.arg,
			};
		});
		builder.addCase(deleteBrand.rejected, (state) => {
			state.deleteBrandLoadingProcess = {
				active: false,
				id: null,
			};
		});
	},
});

export const userReducer = brandSlice.reducer;
