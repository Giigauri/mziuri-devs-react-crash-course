import { Link } from 'react-router-dom';
import { IUser } from './interfaces/user.interface';

type UserProps = {
	user: IUser;
};

export const User: React.FC<UserProps> = ({ user }) => {
	return (
		<Link to={`/users/${user.id}`}>
			<h1>{user.id + ' ' + user.name}</h1>
		</Link>
	);
};
