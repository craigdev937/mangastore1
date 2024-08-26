import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { IMan } from "../models/Interfaces";

type CAR = {
    manga: IMan
};

export const CartItem = ({manga}: CAR) => {
    return (
        <React.Fragment>
            <section key={manga.id} className="py-5">
                <img className="w-25" src={manga.imgUrl} alt={manga.title} />
                <h3 className="text-muted fs-4 my-4">{manga.title}</h3>
                <h1 className="fs-2 my-2">{manga.price}</h1>
                <h4 className="fs-2 my-2">{manga.quantity}</h4>
                <button className="btn btn-outline-danger me-2">
                    <FaMinus />
                </button>
                <button className="btn btn-danger">
                    <FaTrashAlt className="me-2" />Remove
                </button>
                <button className="btn btn-outline-danger ms-2">
                    <FaPlus />
                </button>
            </section>
        </React.Fragment>
    );
};



