import React, { useState } from "react";

const ContextGifs = React.createContext({});

const GifsContextProvider = ({ children })=> {
    const [gifs, setGifs] = useState([]);

    return (
        <ContextGifs.Provider value={{gifs, setGifs}}>
            { children }
        </ContextGifs.Provider>
    )
};

export { ContextGifs, GifsContextProvider };