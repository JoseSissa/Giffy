import React from 'react';
import { Gif } from '../gif/gif';
import './listofGifs.css';

const ListofGifs = ({ gifs }) => {
    
    // const { keyword } = params;
    // const { gifs } = useGifs({ keyword });

    return (
        <div className='gallery'>
            {
                gifs.map(singleGif => 
                    <Gif 
                        key={singleGif.id}
                        title={singleGif.title} 
                        url={singleGif.url} 
                        id={singleGif.id} 
                    /> 
                )
            }
        </div>
    )
};

export { ListofGifs };