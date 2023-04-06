import { Product } from '../components/product/Product';
import { ContentLoading } from '../common/components/ContentLoading/ContentLoading';
import { ErrorMessage } from '../common/components/ErrorMesssage/ErrorMessage';
import { EmptyContent } from '../common/components/EmptyContent/EmptyContent';
import { Modal } from '../common/components/Modal/Modal';
import { CreateProductForm } from '../components/product/CreateProductForm';
import { useContext } from 'react';
import { IProduct } from '../components/product/interfaces/product.interface';
import { ModalContext } from '../common/components/Modal/ModalContext';
import { useFetchData } from '../common/hooks/useFetchData.hook';
import { useAppSelector } from '../state/hooks/useAppSelector.hook';
import { useAppDispatch } from '../state/hooks/useAppDispatch.hook';
import { increment } from '../state/features/product/product.slice';
import { decrement } from '../state/features/product/product.slice';
import { incrementByAmount } from '../state/features/product/product.slice';

export const ProductsPage: React.FC = () => {
	const { data, error, isEmpty, loading, addItem } = useFetchData<IProduct>('https://fakestoreapi.com/products');
	const { modalVisible, open, close } = useContext(ModalContext);

	const { count } = useAppSelector((state) => state.product);

	const dispatch = useAppDispatch();

	const createProduct = (product: IProduct) => {
		addItem(product);

		close();
	};

	const incrementCount = () => {
		dispatch(increment());
	};

	const decrementCount = () => {
		dispatch(decrement());
	};

	const incrementCountByAmount = () => {
		dispatch(incrementByAmount(15));
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			<h1>{count}</h1>

			<button onClick={incrementCount}>INCREMENT COUNT</button>
			<button onClick={decrementCount}>DECREMENT COUNT</button>
			<button onClick={incrementCountByAmount}>INCREMENT COUNT BY AMOUNT</button>

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
