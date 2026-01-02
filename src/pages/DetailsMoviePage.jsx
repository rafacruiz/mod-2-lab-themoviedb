import { useParams } from "react-router-dom";
import { LayoutPage } from "../components/layout";
import { MovieDetails } from "../components/movies";

function DetailsMoviePage () {

    const { movieId } = useParams();
    
    return (
        <LayoutPage>
            <MovieDetails id={ movieId } />
        </LayoutPage>
    );
}

export default DetailsMoviePage;