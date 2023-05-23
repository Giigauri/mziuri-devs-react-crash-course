import { useEffect, useState } from 'react';
import { ICategory } from '../../state/features/menu/category/interfaces/category.interface';
import { useAppDispatch } from '../../state/hooks/useAppDispatch.hook';
import { useAppSelector } from '../../state/hooks/useAppSelector.hook';
import { MenuListContainer } from './ListContainer';
import { MenuListHeader } from './ListHeader';
import { getSubCategories } from '../../state/features/menu/sub-category/thunks/get-sub-categories.thunk';
import { ISubCategory } from '../../state/features/menu/sub-category/interfaces/sub-category.interface';
import { MenuListItem } from './ListItem';

type Props = {
	selectedCategory: ICategory;
};

export const SubCategoriesList: React.FC<Props> = ({ selectedCategory }) => {
	const { subCategories, loadingForSubCategories } = useAppSelector((state) => state.subCategory);

	const [selectedCategorySubCategories, setSelectedCategorySubCategories] = useState<ISubCategory[]>([]);

	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!subCategories.length) {
			dispatch(getSubCategories());
		}
	}, []);

	useEffect(() => {
		if (selectedCategory) {
			setSelectedCategorySubCategories(
				subCategories.filter(
					(subCategory) => String(subCategory.parent_category) === String(selectedCategory._id)
				)
			);
		} else {
			setSelectedCategorySubCategories([]);
		}
	}, [selectedCategory]);

	return (
		<MenuListContainer isLoading={loadingForSubCategories}>
			<MenuListHeader title={'Sub categories'} createHandler={() => {}} />

			{selectedCategorySubCategories.length ? (
				selectedCategorySubCategories.map((subCategory: ISubCategory) => (
					<MenuListItem
						title={subCategory.name}
						isSelected={false}
						editHandler={() => {}}
						deleteHandler={() => {}}
						selectHandler={() => {}}
					/>
				))
			) : (
				<p>Sub categories is empty...</p>
			)}
		</MenuListContainer>
	);
};
