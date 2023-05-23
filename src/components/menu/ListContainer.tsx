type Props = {
	children: React.ReactNode;
	isErrored?: boolean;
	isLoading?: boolean;
};

export const MenuListContainer: React.FC<Props> = ({ children, isErrored = false, isLoading = false }) => {
	return (
		<div className="menu-list-container">
			{isLoading && <p>Loading...</p>}
			{isErrored && <p>Error Message</p>}
			{!isErrored && !isLoading && children}
		</div>
	);
};
