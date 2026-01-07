import { useEffect, useState } from "react";
import * as MoviesService from '../../../services/tmdb-service';
import { Link } from "react-router-dom";

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

    if (!movie) return null;

    return (
        <div className="container my-5">
            <div className="row g-4">

                <div className="col-md-4">
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="img-fluid rounded shadow-sm"
                    />
                </div>

                <div className="col-md-8">
                    <div className="d-flex align-items-start justify-content-between mb-3">
                        <h1 className="fw-bold mb-0">{movie.title}</h1>

                        <span
                            className="
                                badge text-bg-warning text-dark
                                rounded-circle
                                d-flex align-items-center justify-content-center"
                            style={{ width: "48px", height: "48px" }}
                            aria-label={`Valoración ${movie.rating}`}
                        >
                            {movie.rating}
                        </span>
                    </div>

                    <p className="text-muted mb-2">
                        {movie.date} · {movie.time} min
                    </p>

                    <div className="mb-3">
                        
                    </div>

                    <p className="lead">{movie.description}</p>
                    <div className="mt-4">
                        <Link to={-1} className="btn btn-outline-secondary">
                        ← Volver
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;