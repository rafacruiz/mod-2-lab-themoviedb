import { HomePage, ListMoviePage } from "./pages";
import { Jumbotron, Navbar } from './components/ui';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/movies" element={ <ListMoviePage /> } />
      </Routes>
    </>
  )
}

export default App
