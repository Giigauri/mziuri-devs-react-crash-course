import { Product } from '../components/product/Product';
import { ContentLoading } from '../common/components/ContentLoading/ContentLoading';
import { ErrorMessage } from '../common/components/ErrorMesssage/ErrorMessage';
import { EmptyContent } from '../common/components/EmptyContent/EmptyContent';
import { Modal } from '../common/components/Modal/Modal';
import { CreateProductForm } from '../components/product/CreateProductForm';
import { useContext, useEffect } from 'react';
import { IProduct } from '../components/product/interfaces/product.interface';
import { ModalContext } from '../common/components/Modal/ModalContext';
import { useFetchData } from '../common/hooks/useFetchData.hook';
import { useAppDispatch } from '../state/hooks/useAppDispatch.hook';
import { registration } from '../state/features/auth/thunks/registration.thunk';
import { login } from '../state/features/auth/thunks/login.thunk';
import { logOut } from '../state/features/auth/auth.slice';

export const ProductsPage: React.FC = () => {
	const { data, error, isEmpty, loading, addItem } = useFetchData<IProduct>('https://fakestoreapi.com/products');
	const { modalVisible, open, close } = useContext(ModalContext);

	const dispatch = useAppDispatch();

	// useEffect(() => {
	// 	dispatch(
	// 		registration({
	// 			name: 'Davit',
	// 			phone: '558777777',
	// 			website: 'https://mywebsite.com',
	// 			username: 'gigauri',
	// 			email: '1davit.gigauri@gmail.com',
	// 			password: '123456',
	// 		})
	// 	);
	// }, []);

	// useEffect(() => {
	// 	dispatch(
	// 		login({
	// 			email: '1davit.gigauri@gmail.com',
	// 			password: '123456',
	// 		})
	// 	);
	// }, []);

	// dispatch(logOut());

	const createProduct = (product: IProduct) => {
		addItem(product);

		close();
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <ContentLoading />}

			{error && <ErrorMessage error={error} />}

			{data.length ? data.map((product) => <Product key={product.id} product={product} />) : null}

			{isEmpty && <EmptyContent title={'Products not found'} />}

			{modalVisible && (
				<Modal title={'Create Product'}>
					<CreateProductForm createProduct={createProduct} productsLength={data.length} />
				</Modal>
			)}

			<button
				className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
				onClick={open}
			>
				+
			</button>
		</div>
	);
};
