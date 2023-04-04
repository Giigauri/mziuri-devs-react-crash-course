import { Product } from '../components/product/Product';
import { useProducts } from '../components/product/hooks/use-products.hook';
import { ContentLoading } from '../common/components/ContentLoading/ContentLoading';
import { ErrorMessage } from '../common/components/ErrorMesssage/ErrorMessage';
import { EmptyContent } from '../common/components/EmptyContent/EmptyContent';
import { Modal } from '../common/components/Modal/Modal';
import { CreateProductForm } from '../components/product/CreateProductForm';
import { useContext } from 'react';
import { IProduct } from '../components/product/interfaces/product.interface';
import { ModalContext } from '../common/components/Modal/ModalContext';

export const ProductsPage = () => {
	const { products, error, isEmpty, loading, addProduct } = useProducts();
	const { modalVisible, open, close } = useContext(ModalContext);

	const createProduct = (product: IProduct) => {
		addProduct(product);

		close();
	};

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <ContentLoading />}

			{error && <ErrorMessage error={error} />}

			{products.length
				? products.map((products_item) => <Product key={products_item.id} product={products_item} />)
				: null}

			{isEmpty && <EmptyContent title={'Products not found'} />}

			{modalVisible && (
				<Modal title={'Create Product'}>
					<CreateProductForm createProduct={createProduct} productsLength={products.length} />
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
