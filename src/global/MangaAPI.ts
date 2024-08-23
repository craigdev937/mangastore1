import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMan } from "../models/Interfaces";
const URL = "http://localhost:5000";

export const MangaAPI = createApi({
    reducerPath: "MangaAPI",
    tagTypes: ["Manga"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        man: builder.query<IMan[], void>({
            query: () => "/mangas"
        })
    })
});



