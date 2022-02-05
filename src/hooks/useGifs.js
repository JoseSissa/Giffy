import { useEffect, useState } from "react";
import { getGifs } from "../services/getGifs";

const useGifs = ({ keyword } = { keyword:'mapache'})=> {
    const [gifs, setGifs] = useState([]);
    
    localStorage.setItem('lastKeyword', keyword);

    useEffect(()=> {
        getGifs({ keyword })
            .then(gifs => setGifs(gifs));        
    }, [keyword]);

    return { gifs }
};

export { useGifs };