import { useEffect, useState } from 'react';
import * as MoviesService from './../../../services/tmdb-service';

function ListMovie() {

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
                Lista de peliculas
                { movies.map(movie => (
                    <div key={ movie.id } >
                        { movie.title }
                    </div>
                )) }
            </div>
        );
    }
}

export default ListMovie;