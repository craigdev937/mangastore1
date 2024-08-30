import React from "react";
import { FaMinus, FaPlus, 
    FaTrashAlt } from "react-icons/fa";
import { CartActions } from "../global/CartSlice";
import { IMan } from "../models/Interfaces";
import { useAD } from "../global/Hooks";

export const CartItem = 
({id, title, price, quantity, imgUrl}: IMan) => {
    const dispatch = useAD();

    return (
        <React.Fragment>
            <section key={id} className="py-5">
                <img className="w-25" src={imgUrl} alt={title} />
                <h3 className="text-muted fs-4 my-4">{title}</h3>
                <h1 className="fs-2 my-2">{price}</h1>
                <h4 className="fs-2 my-2">{quantity}</h4>
                <button className="btn btn-outline-danger me-2"
                    onClick={() => {
                        if (quantity === 1) {
                            dispatch(CartActions.removeFromCart(id));
                            return;
                        } dispatch(CartActions.decrease({id}))
                    }}
                >
                    <FaMinus />
                </button>
                <button 
                    className="btn btn-danger" 
                    onClick={() => {
                    dispatch(CartActions.removeFromCart(id))
                }}>
                    <FaTrashAlt className="me-2" />Remove
                </button>
                <button 
                    className="btn btn-outline-danger ms-2"
                    onClick={() => {
                        dispatch(CartActions.increase({id}))
                    }}
                >
                    <FaPlus />
                </button>
            </section>
        </React.Fragment>
    );
};



