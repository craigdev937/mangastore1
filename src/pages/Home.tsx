import React from "react";
import { MangaAPI } from "../global/MangaAPI";

export const Home = () => {
    const { error, isLoading, data } = MangaAPI.useManQuery();

    return (
        <React.Fragment>
            {data!.map((manga) => (
                <aside key={manga.id}>
                    <img src={manga.imgUrl} alt={manga.title} />
                    <h3>{manga.title}</h3>
                    <h2>{manga.price}</h2>
                </aside>
            ))}
        </React.Fragment>
    );
};


