import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export const useFetchData = <T>(apiURL: string) => {
	const [data, setData] = useState<T[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>(null);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	const addItem = (item: T) => {
		setData([...data, item]);
	};

	const getData = async () => {
		try {
			setLoading(true);

			setError(null);

			const response = await axios.get<T[]>(apiURL);

			response.data.length ? setData(response.data) : setIsEmpty(true);

			setLoading(false);
		} catch (e: unknown) {
			const error = e as AxiosError;

			setError(error.message);

			setData([]);

			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return { data, error, isEmpty, loading, addItem };
};
