import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponse } from '../interfaces/responses/auth.response';
import { IRegistrationDTO } from '../interfaces/dtos/registration.dto';
import { getMe } from '../../user/thunks/get-me.thunk';

import axios from 'axios';

export const registration = createAsyncThunk(
	'auth/registration',
	async (DTO: IRegistrationDTO, { rejectWithValue, dispatch }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const body = JSON.stringify(DTO);

			const { data } = await axios.post<IAuthResponse>(
				'http://localhost:5001/api/auth/registration',
				body,
				config
			);

			dispatch(getMe(data.access_token));

			return data.access_token;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
