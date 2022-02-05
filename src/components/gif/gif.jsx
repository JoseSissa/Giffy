import React from 'react';
import './gifs.css';

const Gif = ({ title, url, id }) => {
    return (
        <div className='gallery-item'>
            {/* <h4>{title}</h4>
            <a href={`#${id}`}>
            </a> */}
            <img src={url} alt={title} />
        </div>
    )
};

export { Gif };