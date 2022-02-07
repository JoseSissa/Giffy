import { useContext, useEffect } from "react";
import { getGifs } from "../services/getGifs";
import { ContextGifs } from "../context/GifsContext";

const useGifs = ({ keyword } = { keyword: null })=> {

    const {gifs, setGifs} = useContext(ContextGifs);
    
    useEffect(()=> {
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';
        getGifs({ keyword: keywordToUse })
            .then(gifs => setGifs(gifs));     
                localStorage.setItem('lastKeyword', keywordToUse);   
    }, [keyword, setGifs]);

    return { gifs };
};

export { useGifs };