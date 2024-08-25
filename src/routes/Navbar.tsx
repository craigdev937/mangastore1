import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useAS, useAD } from "../global/Hooks";
import { CartActions } from "../global/CartSlice";

export const Navbar = () => {
    const { quantity, cartItems } = useAS((state) => state.cart);
    const dispatch = useAD();

    React.useEffect(() => {
        dispatch(CartActions.cartTotal());
    }, [cartItems, dispatch]);

    return (
        <React.Fragment>
            <nav className="navbar 
                navbar-light 
                bg-light shadow-sm">
                <section className="container-lg">
                    <Link 
                        className="navbar-brand 
                        text-danger 
                        fw-bold fs-4"
                        to={"/"}
                        >
                            MangaStore
                    </Link>
                    <div>
                        <Link
                            className="btn btn-danger 
                                text-white 
                                ms-auto
                                px-4
                                rounded-pill fw-bold" 
                            to={"/cart"}
                            >
                                <FaCartArrowDown 
                                    className="me-2 fs-4" 
                                />({ quantity })
                        </Link>
                    </div>
                </section>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};

