import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";

function App() {
  return (
    //to wrap app using browserrouter
    <BrowserRouter>
    <Header />
    <div className="app">
      <Container>
      <Routes>
            <Route path="/" element={<Trending/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/series" element={<Series/>} />
            <Route path="/search" element={<Search/>} />
      </Routes>
      </Container>
    </div>
    {/* creating pages : using material ui*/}
    
    <SimpleBottomNavigation/>
    </BrowserRouter>                
  );
}

export default App;
