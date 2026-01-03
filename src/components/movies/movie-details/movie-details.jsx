import { useEffect, useState } from "react";
import * as MoviesService from '../../../services/tmdb-service';

function MovieDetails ({ id, setJumbotronTitle }) {

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

        fetchMovie(id);
    }, [id]);

    useEffect(() => {
        if (!movie) return;

        setJumbotronTitle(movie.title);

        return () => {
            setJumbotronTitle("Welcome to dataMovie");
        };
    }, [movie, setJumbotronTitle]);

    return (
        <div>
            { movie && 
                movie.title }
        </div>
    );
}

export default MovieDetails;