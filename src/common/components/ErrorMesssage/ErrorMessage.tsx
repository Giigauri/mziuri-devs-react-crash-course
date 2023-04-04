type ErrorMessageProps = {
	error: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
	return <p className="text-center text-red-600">{error}</p>;
};
