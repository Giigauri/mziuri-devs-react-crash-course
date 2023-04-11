import { Fragment } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFound';
import { ProductsPage } from './pages/Products';
import { UsersPage } from './pages/Users';
import { UserPage } from './pages/User';

const App: React.FC = () => {
	return (
		<Fragment>
			<nav>
				<ul>
					<li>
						<NavLink to={'/'} className={({ isActive }) => (isActive ? 'activeNavItem' : 'disableNavItem')}>
							Home
						</NavLink>
					</li>

					<li>
						<NavLink
							to={'/products'}
							className={({ isActive }) => (isActive ? 'activeNavItem' : 'disableNavItem')}
						>
							Products
						</NavLink>
					</li>

					<li>
						<NavLink
							to={'/users'}
							className={({ isActive }) => (isActive ? 'activeNavItem' : 'disableNavItem')}
						>
							Users
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/users" element={<UsersPage />} />
				<Route path="/users/:id" element={<UserPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Fragment>
	);
};

export default App;
