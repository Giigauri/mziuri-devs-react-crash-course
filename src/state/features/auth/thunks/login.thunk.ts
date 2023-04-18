import { createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginDTO } from '../interfaces/dtos/login.dto';
import { IAuthResponse } from '../interfaces/responses/auth.response';
import { getMe } from '../../user/thunks/get-me.thunk';

import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (DTO: ILoginDTO, { rejectWithValue, dispatch }) => {
	try {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify(DTO);

		const { data } = await axios.post<IAuthResponse>('http://localhost:5001/api/auth/login', body, config);

		dispatch(getMe(data.access_token));

		return data.access_token;
	} catch (error) {
		return rejectWithValue(error);
	}
});
