import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Logo from '/src/img/LogoSinFondo.png';

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand d-flex align-items-center">
            <img className="image-logo" src={Logo} alt="nombre_imagen_1" />
            <span className="ml-2">REFLECTIVE TECH</span>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleDropdown} aria-expanded={dropdownOpen ? 'true' : 'false'}>
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/carrito" className="nav-link">
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                        Carrito <span className="badge badge-pill badge-primary">{store.cart.length}</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</nav>


	);
};

export default Navbar;
