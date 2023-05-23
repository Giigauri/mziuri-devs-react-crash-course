import { MenuActionButton } from './ActionButton';
import { MenuActionButtonType } from './enums/action-button-type.enum';

type Props = {
	title: string;
	isSelected: boolean;
	selectHandler: () => void;
	editHandler: () => void;
	deleteHandler: () => void;
};

export const MenuListItem: React.FC<Props> = ({ title, isSelected, selectHandler, editHandler, deleteHandler }) => {
	return (
		<div className={`menu-list-item ${isSelected ? 'selected-menu-list-item' : ''}`} onClick={selectHandler}>
			<h3>{title}</h3>

			<div className="menu-list-item-actions-container">
				<MenuActionButton onClick={editHandler} actionType={MenuActionButtonType.EDIT} />
				<MenuActionButton onClick={deleteHandler} actionType={MenuActionButtonType.DELETE} />
			</div>
		</div>
	);
};
