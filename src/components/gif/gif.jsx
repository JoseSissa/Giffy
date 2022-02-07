import React from 'react';
import { Link } from 'wouter';
import './gifs.css';

const Gif = ({ title, url, id }) => {
    return (
        <div className='gallery-item'>
            <Link to={`/gif/${id}`}>
                <img src={url} alt={title} />
            </Link>
            
        </div>
    )
};

export { Gif };