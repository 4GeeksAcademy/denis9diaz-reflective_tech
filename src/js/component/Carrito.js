import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Carrito = () => {
    const { store, actions } = useContext(Context);

    const handleRemoveFromCart = (index) => {
        actions.removeFromCart(index);
    };

    const calculateTotal = () => {
        let total = 0;
        for (let item of store.cart) {
            total += item.precio;
        }
        return total.toFixed(2);
    };

    return (
        <div className="carrito">
            <h1 className="title-page">Carrito</h1>
            <ul>
                {store.cart.map((item, index) => (
                    <li key={index}>
                        <img src={item.imagen} alt="Imagen del artículo" className="imagen-articulo-carrito" />
                        <p>{item.descripcion}</p>
                        <p>Precio: {item.precio}€</p>
                        <button onClick={() => handleRemoveFromCart(index)} className="btn-delete"><FontAwesomeIcon icon={faTrash} /></button>
                    </li>
                ))}
            </ul>
            <div className="total">
                <p className="total-price">Total: {calculateTotal()}€</p>
            </div>
        </div>
    );
};

export default Carrito;
