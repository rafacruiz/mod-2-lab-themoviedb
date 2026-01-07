import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from '../../ui';
import MovieItem from '../movie-item/movie-item';
import * as MoviesService from '../../../services/tmdb-service';

function MovieList() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isReload, setIsReload] = useState(false);

    const [favorites, setFavorites] = useState(() => {
        const stored = localStorage.getItem('movies-db');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('movies-db', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsReload(true);
            const data = await MoviesService.listMovies({ page });

            setMovies(prev =>
                page === 1 ? data.results : [...prev, ...data.results]);

            setIsReload(false);
        };

        fetchMovies();
    }, [page]);

    const handleFavorite = (movie) => {
        const exists = favorites.some(fav => fav.id === movie.id);
        if (exists) {
            removeFavorite(movie.id);
        } else {
            setFavorites(prev => [...prev, movie]);
        }
    };

    const removeFavorite = (id) => {
        setFavorites(prev => prev.filter(movie => movie.id !== id));
    };

    const isFavorite = (movieId) => favorites.some(fav => fav.id === movieId);

    if (isReload && movies.length === 0) {
        return <div className="container py-4">Cargando peliculas...</div>;
    } else {
        return (
            <div className="container py-4">
                <div className='row g-4'>
                    {movies.map(movie => (
                        <div  className='col-md-3' key={ movie.id } >
                            <Link to={ '/movie/'+movie.id }>
                                <MovieItem movie={ movie } handleFavorite={ handleFavorite } isFavorite={ isFavorite }/>
                            </Link>
                        </div>
                    )) }
                </div>

                <Pagination setPage={ setPage } isLoading={ isReload }/>
            </div>
        );
    }
}

export default MovieList;