import { DetailsMoviePage, HomePage, ListMoviePage } from "./pages";
import { Jumbotron, Navbar } from './components/ui';
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {

  const [jumbotronTitle, setJumbotronTitle] = useState("Películas");

  return (
    <>
      <Navbar />
      <Jumbotron title={ jumbotronTitle } />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/movies" element={ <ListMoviePage /> } />
        <Route 
          path="/movie/:movieId" 
          element={ 
            <DetailsMoviePage 
              setJumbotronTitle={setJumbotronTitle} 
            /> 
          } />
      </Routes>
    </>
  )
}

export default App
