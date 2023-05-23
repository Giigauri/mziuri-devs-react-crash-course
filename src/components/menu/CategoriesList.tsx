import { useEffect } from 'react';
import { ICategory } from '../../state/features/menu/category/interfaces/category.interface';
import { useAppSelector } from '../../state/hooks/useAppSelector.hook';
import { MenuListContainer } from './ListContainer';
import { MenuListHeader } from './ListHeader';
import { useAppDispatch } from '../../state/hooks/useAppDispatch.hook';
import { getCategories } from '../../state/features/menu/category/thunks/get-categories.thunk';
import { MenuListItem } from './ListItem';

type Props = {
	selectedCategory: ICategory;
	setSelectedCategory: React.Dispatch<React.SetStateAction<ICategory>>;
};

export const CategoriesList: React.FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
	const { categories, loadingForCategories } = useAppSelector((state) => state.category);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!categories.length) {
			dispatch(getCategories());
		}
	}, []);

	return (
		<MenuListContainer isLoading={loadingForCategories}>
			<MenuListHeader title={'Categories'} createHandler={() => {}} />

			{categories.length ? (
				categories.map((category: ICategory) => (
					<MenuListItem
						title={category.name}
						isSelected={String(selectedCategory._id) === String(category._id)}
						editHandler={() => {}}
						deleteHandler={() => {}}
						selectHandler={() => setSelectedCategory(category)}
					/>
				))
			) : (
				<p>Categories is empty...</p>
			)}
		</MenuListContainer>
	);
};
