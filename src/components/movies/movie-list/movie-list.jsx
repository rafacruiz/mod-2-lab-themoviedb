import { useEffect, useState } from 'react';
import * as MoviesService from '../../../services/tmdb-service';
import MovieItem from '../movie-item/movie-item';
import { Link } from 'react-router-dom';

function MovieList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await MoviesService.listMovies();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    if (!movies) {
        return <div className="container py-4">Cargando peliculas...</div>;
    } else {
        return (
            <div className="container py-4">
                <div className='row g-4'>
                    {movies.map(movie => (
                        <div  className='col-md-3' key={ movie.id } >
                            <Link to={ '/movie/'+movie.id }>
                                <MovieItem movie={ movie } />
                            </Link>
                        </div>
                    )) }
                </div>
            </div>
        );
    }
}

export default MovieList;