import React from "react";
import { useAS } from "../global/Hooks";

export const Cart = () => {
    const { cartItems, quantity, total } = 
        useAS((state) => state.cart);

    return (
        <React.Fragment>
            <section>
                <div>
                    {cartItems.map((manga) => (
                        <aside key={manga.id}>
                            <h3>{manga.title}</h3>
                            <h1>{manga.price}</h1>
                        </aside>
                    ))}
                </div>
                <aside>
                    <span>Total ({quantity}): ${total}</span>
                </aside>
            </section>
        </React.Fragment>
    );
};


