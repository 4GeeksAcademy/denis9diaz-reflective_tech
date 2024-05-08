import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Image1 from '/src/img/Image1.png';
import Image2 from '/src/img/Image2.png';
import Image3 from '/src/img/Image3.png';
import Articulo from "../component/Articulo";

const Productos = () => {
    const { actions } = useContext(Context);

    const handleAddToCart = (articulo) => {
        actions.addToCart(articulo);
    };

    return (
        <div className="home text-center mt-5">
            <h1 className="title-page">Productos</h1>
            <div className="image-container">
                <Articulo
                    imagen={Image1}
                    descripcion="Espejo para baño pequeño"
                    precio={19.99}
                    onAddToCart={() => handleAddToCart({ imagen: Image1, descripcion: "Espejo para baño pequeño", precio: 19.99 })}
                />
                <Articulo
                    imagen={Image2}
                    descripcion="Espejo para baño amplio"
                    precio={29.99}
                    onAddToCart={() => handleAddToCart({ imagen: Image2, descripcion: "Espejo para baño amplio", precio: 29.99 })}
                />
                <Articulo
                    imagen={Image3}
                    descripcion="Espejo para baño circular"
                    precio={39.99}
                    onAddToCart={() => handleAddToCart({ imagen: Image3, descripcion: "Espejo para baño circular", precio: 39.99 })}
                />
            </div>
        </div>
    );
};

export default Productos;
