import React, { useState } from "react";
import './header.css';
import { Link, useLocation } from 'wouter';

const Header = ()=> {
    
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const handleSubmit = (e)=> {
        e.preventDefault();
        pushLocation(`/search/${keyword}`);
    };
    const handleChange = (e)=> {
        setKeyword(e.target.value);
    };

    return (
        <header>
            <Link to={'/'} className="logo"></Link>
            <form className="searcher" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={keyword} placeholder='Buscador de Gifs ...' />
            </form>
        </header>
    )
};

export { Header };