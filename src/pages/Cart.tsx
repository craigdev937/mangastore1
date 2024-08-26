import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAS, useAD } from "../global/Hooks";
import { CartItem } from "../components/CartItem";
import { CartActions } from "../global/CartSlice";

export const Cart = () => {
    const { cartItems, quantity, total } = 
        useAS((state) => state.cart);

    const dispatch = useAD();
    const navigate = useNavigate();

    const handleClick = 
    (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (quantity === 0 && total === 0) {
            toast.warn("Your Cart is Empty!", {
                position: "top-center", autoClose: 2000,
                hideProgressBar: false, closeOnClick: true,
                pauseOnHover: true, draggable: true,
                progress: undefined, theme: "colored"
            });

            setTimeout(function(){
                navigate("/");
            }, 2000);
        } else {
            toast.success("Thanks for Purchase!", {
                position: "top-center", autoClose: 2000,
                hideProgressBar: false, closeOnClick: true,
                pauseOnHover: true, draggable: true,
                progress: undefined, theme: "colored"
            });
            setTimeout(function(){
                dispatch(CartActions.clearCart());
                navigate("/")
            }, 2000);
        }
    };

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
                        <CartItem {...manga} />
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
                        onClick={handleClick}
                        >Purchase
                    </button>
                </aside>
            </section>
        </React.Fragment>
    );
};


