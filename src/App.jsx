import { DetailsMoviePage, HomePage, ListMoviePage } from "./pages";
import { Navbar } from './components/ui';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/movies" element={ <ListMoviePage /> } />
        <Route path="/movie/:movieId" element={ <DetailsMoviePage /> } />
      </Routes>
    </>
  )
}

export default App
