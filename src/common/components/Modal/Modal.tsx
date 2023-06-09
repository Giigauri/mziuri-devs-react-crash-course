import { Fragment, useContext } from 'react';
import { ModalContext } from './ModalContext';

type ModalProps = {
	children: React.ReactNode;
	title: string;
};

export const Modal: React.FC<ModalProps> = ({ children, title }) => {
	const { close } = useContext(ModalContext);

	return (
		<Fragment>
			<div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={close} />

			<div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
				<h1>{title}</h1>

				{children}
			</div>
		</Fragment>
	);
};
