import { useContext } from 'react';
import { ContextGifs } from '../context/GifsContext';

const useGlobalGifs = ()=> {
    return (useContext(ContextGifs).gifs);
};

export { useGlobalGifs };