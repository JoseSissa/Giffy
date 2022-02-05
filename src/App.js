import React from 'react';
import './App.css';
import { Route } from 'wouter';
import { Home } from './pages/Home/home';
import { Header } from './components/Header/Header';
import { SearchResults } from './pages/SearchResults/searchResults';


function App() {

  return (
    <React.Fragment>
      <Header /> 
      <section className="App">
        <Route 
          path='/' 
          component={Home}
        />

        <Route 
          path='/search/:keyword' 
          component={SearchResults} 
        />
      </section>
    </React.Fragment>    
  );
}


export default App;
