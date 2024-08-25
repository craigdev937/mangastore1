import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { MangaAPI } from "../global/MangaAPI";
import { useAD } from "../global/Hooks";
import { CartActions } from "../global/CartSlice";

export const Home = () => {
    const { data } = MangaAPI.useManQuery();
    const [search, setSearch] = React.useState("");
    const [sortData, setSortData] = React.useState("");
    const dispatch = useAD();

    const mangas = 
        sortData === "low" ? data && data.slice().sort(
            (a,b) => a.price - b.price) :
        sortData === "high" ? data && data.slice().sort(
            (a,b) => b.price - a.price) :
        sortData === "a-z" ? data && data.slice().sort(
            (a,b) => (a.title > b.title ? 1 : -1)) :
        sortData === "z-a" ? data && data.slice().sort(
            (a,b) => (b.title > a.title ? 1 : -1)) :
        sortData === "default" ? data : data

    const handleSort =
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setSortData(event.target.id)
    };

    const handleChange =
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    };

    return (
        <main className="container-lg py-4">
            <div className="input-group mb-3">
                <input 
                    type="search" 
                    placeholder="Monster..." 
                    className="form-control" 
                    aria-label="Text input with dropdown button" 
                    onChange={handleChange}
                />
                <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-item">
                        <div className="form-check">
                            <label htmlFor="default" className="form-check-label">Default</label>
                            <input 
                                className="form-check-input"
                                type="radio" 
                                id="default" 
                                name="sort" 
                                value={sortData}
                                onChange={handleSort}                                 
                            />
                        </div>
                    </li>
                    <hr className="dropdown-divider" />
                    <li className="dropdown-item">
                        <div className="form-check">
                            <label htmlFor="low" className="form-check-label">Price (Lowest)</label>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="low" 
                                name="sort" 
                                value={sortData}
                                onChange={handleSort}
                            />
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <div className="form-check">
                            <label htmlFor="high" className="form-check-label">Price (Highest)</label>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="high" 
                                name="sort"
                                value={sortData} 
                                onChange={handleSort}                            
                            />
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <div className="form-check">
                            <label htmlFor="a-z" className="form-check-label">A-Z</label>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="a-z" 
                                name="sort" 
                                value={sortData}
                                onChange={handleSort}
                            />
                        </div>
                    </li>
                    <li className="dropdown-item">
                        <div className="form-check">
                            <label htmlFor="z-a" className="form-check-label">Z-A</label>
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                id="z-a" 
                                name="sort"
                                value={sortData} 
                                onChange={handleSort}
                            />
                        </div>
                    </li>
                </ul>
            </div>

            <section className="row">
                {mangas && mangas.filter((items) => {
                    return search.toLocaleLowerCase() === "" ? items :
                        items.title.toLocaleLowerCase().includes(search)
                }).map((manga) => (
                    <aside
                        key={manga.id}
                        className="col-md-6 
                            col-lg-4 text-center">
                        <div className="py-4">
                            <img
                                className="rounded"
                                src={manga.imgUrl}
                                alt={manga.title}
                                width={180} height={250}
                            />
                            <h3 className="fs-5 my-4">{manga.title}</h3>
                            <h2 className="lead 
                                fw-bold fs-4 my-2">$ {manga.price}</h2>
                            <button className="btn 
                                btn-danger 
                                text-decoration-none 
                                ms-2 my-4"
                                onClick={() => dispatch(
                                    CartActions.addToCart(manga))}
                            >
                                <FaCartPlus className="me-2 fs-5" />
                                Add To Cart
                            </button>
                        </div>
                    </aside>
                ))}
            </section>
        </main>
    );
};


