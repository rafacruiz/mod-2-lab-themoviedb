import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LayoutPage } from "../components/layout";
import { MovieDetails } from "../components/movies";
import * as MoviesService from '../services/tmdb-service';

function DetailsMoviePage () {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async (id) => {
            try {
                const movie = await MoviesService.getMovie(id);
                setMovie(movie);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovie(movieId);
    }, [movieId]);

    return (
        <LayoutPage title={ movie?.title } >
            { movie && ( <MovieDetails movie={ movie } />) }
        </LayoutPage>
    );
}

export default DetailsMoviePage;