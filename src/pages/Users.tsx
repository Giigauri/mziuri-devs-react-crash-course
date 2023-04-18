import { useFetchData } from '../common/hooks/useFetchData.hook';
import { User } from '../components/user/User';
import { IUser } from '../components/user/interfaces/user.interface';

export const UsersPage: React.FC = () => {
	const { data, error, isEmpty, loading, addItem } = useFetchData<IUser>(
		'https://jsonplaceholder.typicode.com/users'
	);

	return (
		<div className="users-list">
			{data.map((user) => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
};
