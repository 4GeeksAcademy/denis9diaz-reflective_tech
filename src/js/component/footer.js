import React from "react";

export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <div className="container">
            <span className="text-muted">
                &copy; {new Date().getFullYear()} Reflective Tech. Todos los derechos reservados.
            </span>
        </div>
    </footer>
);
