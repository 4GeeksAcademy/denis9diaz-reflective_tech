import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home";
import Carrito from "./component/Carrito";
import Navbar from "./component/navbar";
import Articulo from "./component/Articulo";
import injectContext from "./store/appContext";
import Productos from "./views/Productos";

const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/carrito" element={<Carrito />} />
						<Route path="/" element={<Home />} />
						<Route path="/productos" element={<Productos />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/articulo" element={<Articulo />} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
