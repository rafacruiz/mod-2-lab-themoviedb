
function MovieItem ({ movie, handleFavorite, isFavorite }) {

    return (
        <div className="card text-bg-dark">
            <img src={ movie.posterUrl } className="card-img" alt={ movie.title } />
            <div className="card-img-overlay">
                <h5 className="card-title">{ movie.title }</h5>
                
                <span className="position-absolute bottom-0 start-0
                    badge text-bg-light
                    rounded-circle
                    d-flex align-items-center justify-content-center
                    m-2
                    " style={{ width: "35px", height: "35px" }}>
                    { movie.rating }
                </span>

                <button 
                    className="
                        position-absolute bottom-0 end-0
                        badge text-bg-light
                        rounded-circle
                        d-flex align-items-center justify-content-center
                        m-2" 
                        style={{ width: "35px", height: "35px" }}
                        onClick={(e) => { 
                            e.preventDefault();
                            handleFavorite(movie)
                        }}
                    >
                    { isFavorite(movie.id)
                        ? <i className="fa fa-star" aria-hidden="true"></i> 
                        : <i className="fa fa-star-o" aria-hidden="true"></i> 
                    }
                </button>
            </div>
        </div>
    );
}

export default MovieItem;