import React from 'react';
import './App.css';
import { Route } from 'wouter';
import { Home } from './pages/Home/home';
import { Header } from './components/Header/Header';
import { Detail } from './pages/Detail/Detail';
import { SearchResults } from './pages/SearchResults/searchResults';

import { Context } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';


function App() {

  return (
    <Context.Provider value={{
        name: 'Sissa',
        suscrito: true
      }}>
      <React.Fragment>
        <Header /> 
        <section className="App">

          <GifsContextProvider>
            
            <Route 
              path='/' 
              component={Home}
            />

            <Route 
              path='/search/:keyword' 
              component={SearchResults} 
            />

            <Route
              path='/gif/:id'
              component={Detail}
            />
            
          </GifsContextProvider>

        </section>
      </React.Fragment>    
    </Context.Provider>
  );
}


export default App;
