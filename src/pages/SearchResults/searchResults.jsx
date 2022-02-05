import React from "react";
import { ListofGifs } from "../../components/listofGifs/ListofGifs";
import { useGifs } from "../../hooks/useGifs";

const SearchResults = ({ params })=> {
    const { keyword } = params;
    const { gifs } = useGifs({ keyword });

    return (
        <>
            <ListofGifs gifs={gifs} />
        </>
    )
};

export { SearchResults };