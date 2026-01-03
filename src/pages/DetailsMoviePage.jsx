import { useParams } from "react-router-dom";
import { LayoutPage } from "../components/layout";
import { MovieDetails } from "../components/movies";

function DetailsMoviePage ({ setJumbotronTitle }) {

    const { movieId } = useParams();
    
    return (
        <LayoutPage>
            <MovieDetails 
                id={ movieId } 
                setJumbotronTitle={ setJumbotronTitle } />
        </LayoutPage>
    );
}

export default DetailsMoviePage;