import React from "react";
import { useAS } from "../global/Hooks";
import { CartItem } from "../components/CartItem";

export const Cart = () => {
    const { cartItems, quantity, total } = 
        useAS((state) => state.cart);

    return (
        <React.Fragment>
            <section className="container-lg py-4">
                <div className="text-center">
                    <h2 className="fw-bold mb-5">Your Cart</h2>
                </div>
                <aside 
                    className="row text-center 
                        justify-content-center">
                    {cartItems.map((manga) => (
                        <CartItem 
                            key={manga.id} 
                            manga={manga} 
                        />
                    ))}
                </aside>
                <aside className="text-center pt-5">
                    <h2 className="fs-4 my-4">Cart Summary</h2>
                    <div className="text-danger fs-1 fw-bold">
                        <span>Total ({quantity}): ${total}</span>
                    </div>
                    <button className="btn 
                        btn-danger 
                        text-decoration-none 
                        mt-4"
                        >Purchase
                    </button>
                </aside>
            </section>
        </React.Fragment>
    );
};


