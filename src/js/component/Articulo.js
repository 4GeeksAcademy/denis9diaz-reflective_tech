import React from "react";

const Articulo = ({ imagen, descripcion, precio, onAddToCart }) => {
    return (
        <div className="articulo">
            <img src={imagen} alt="Imagen del artículo" className="imagen-articulo-home" />
            <div className="descripcion-articulo">
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                <button className="btn btn-success" onClick={onAddToCart}>Comprar</button>
            </div>
        </div>
    );
};

export default Articulo;
