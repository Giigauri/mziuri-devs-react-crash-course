type EmptyContentProps = {
	title: string;
};

export const EmptyContent: React.FC<EmptyContentProps> = ({ title }) => {
	return <p className="text-center">{title}</p>;
};
