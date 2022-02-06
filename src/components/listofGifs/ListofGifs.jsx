import React from 'react';
import { Gif } from '../gif/gif';
import './listofGifs.css';

const ListofGifs = ({ gifs }) => {

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