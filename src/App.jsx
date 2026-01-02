import { DetailsMoviePage, HomePage, ListMoviePage } from "./pages";
import { Jumbotron, Navbar } from './components/ui';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  return (
    <>
      <Navbar />
      <Jumbotron />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/movies" element={ <ListMoviePage /> } />
        <Route path="/movie/:movieId" element={ <DetailsMoviePage /> } />
      </Routes>
    </>
  )
}

export default App
