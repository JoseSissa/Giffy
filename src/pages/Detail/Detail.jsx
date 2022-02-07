import React, { useContext } from "react";
import { Gif } from "../../components/gif/gif";
import { useGlobalGifs } from "../../hooks/useGlobalGifs";

const Detail = ({ params })=> {
    
    const gifs = useGlobalGifs()
    console.log(gifs);
    
    const gif = gifs.find(singleGif => singleGif.id === params.id );
    console.log(gif);
    
    return (
        <Gif {...gif} />
    )
};

export { Detail };