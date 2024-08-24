import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

export const Navbar = () => {
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
                                />0
                        </Link>
                    </div>
                </section>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};

