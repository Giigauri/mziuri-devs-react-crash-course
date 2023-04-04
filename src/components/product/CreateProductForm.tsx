import { useEffect, useState } from 'react';
import { ErrorMessage } from '../../common/components/ErrorMesssage/ErrorMessage';
import { IProduct } from './interfaces/product.interface';

type CreateProductFormProps = {
	createProduct: (product: IProduct) => void;
	productsLength: number;
};

export const CreateProductForm: React.FC<CreateProductFormProps> = ({ createProduct, productsLength }) => {
	const [title, setTitle] = useState<string>('');
	const [error, setError] = useState<string | null>(null);

	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		const new_product: IProduct = {
			id: productsLength + 1,
			title: title,
			price: 109.95,
			description:
				'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
			category: "men's clothing",
			image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
			rating: { rate: 3.9, count: 120 },
		};

		// const response = await axios.post<IProduct>('https://fakestoreapi.com/products', new_product);

		createProduct(new_product);
	};

	const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	useEffect(() => {
		if (title.length) {
			title.trim().length === 0 ? setError('Please eventer valid product title.') : setError(null);
		} else {
			setError(null);
		}
	}, [title]);

	return (
		<form onSubmit={submitHandler}>
			<input
				type="text"
				className="border py-2 px-4 mb-2 w-full outline-0"
				placeholder="Enter product title..."
				value={title}
				onChange={titleChangeHandler}
			/>

			{error ? <ErrorMessage error={error} /> : null}

			<button
				type="submit"
				disabled={error || !title.length ? true : false}
				className="py-2 px-4 border bg-yellow-400 hover:bg-blue-400 hover:text-white"
			>
				Create
			</button>
		</form>
	);
};
