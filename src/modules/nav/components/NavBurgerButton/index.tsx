import { useContext } from 'react';
import AppContext from "@modules/layout/context";

const NavBurgerButton = () => {
	const { handleMobileNavMode, isMobileNavMode } = useContext(AppContext);

	return (
		<button onClick={() => handleMobileNavMode(!isMobileNavMode)}>
			open
		</button>
	);
};

export default NavBurgerButton;
