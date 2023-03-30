import { Fragment } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFound';
import { ProductsPage } from './pages/Products';
import { TodoPage } from './pages/Todo';
import { TodosPage } from './pages/Todos';

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
							to={'/todos'}
							className={({ isActive }) => (isActive ? 'activeNavItem' : 'disableNavItem')}
						>
							Todos
						</NavLink>
					</li>

					<li>
						<NavLink
							to={'/todos/1'}
							className={({ isActive }) => (isActive ? 'activeNavItem' : 'disableNavItem')}
						>
							Todo 1
						</NavLink>
					</li>

					<li>
						<NavLink
							to={'/todos/new'}
							className={({ isActive }) => (isActive ? 'activeNavItem' : 'disableNavItem')}
						>
							New Todo
						</NavLink>
					</li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<></>} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/todos" element={<TodosPage />} />
				<Route path="/todos/:id" element={<TodoPage />} />
				<Route path="/todos/new" element={<></>} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Fragment>
	);
};

export default App;
