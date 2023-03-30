import { useParams } from 'react-router-dom';

export const TodoPage = () => {
	const params = useParams();

	console.log(params);

	return <div style={{ marginTop: 20, fontWeight: 'bold', fontSize: 25 }}>Todo Details: {params.id}</div>;
};
