import React from 'react';
import { ListofGifs } from '../../components/listofGifs/ListofGifs';
import { useGifs } from '../../hooks/useGifs';

const Home = () => {
    const keyword = localStorage.lastKeyword;
    const { gifs } = useGifs({ keyword });

    return (
        <>
            <ListofGifs gifs={gifs} />
        </>
    )
};

export { Home };