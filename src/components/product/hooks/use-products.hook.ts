import { useEffect, useState } from 'react';
import { IProduct } from '../interfaces/product.interface';
import { AxiosError } from 'axios';
import { productsDummyData } from '../data/products-dummy.data';

export const useProducts = () => {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [isEmpty, setIsEmpty] = useState<boolean>(false);

	const addProduct = (product: IProduct) => {
		setProducts([...products, product]);
	};

	const getProducts = async () => {
		try {
			setLoading(true);

			setError(null);

			// const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');

			// response.data.length ? setProducts(response.data) : setIsEmpty(true);

			productsDummyData.length ? setProducts(productsDummyData) : setIsEmpty(true);

			setLoading(false);
		} catch (e: unknown) {
			const error = e as AxiosError;

			setError(error.message);

			setProducts([]);

			setLoading(false);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	return { products, error, isEmpty, loading, addProduct };
};
