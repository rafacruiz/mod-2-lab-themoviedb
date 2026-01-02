
function MovieItem ({ movie }) {
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
                    { movie.rating.toFixed(1) }
                </span>

                <span className="position-absolute bottom-0 end-0
                    badge text-bg-light
                    rounded-circle
                    d-flex align-items-center justify-content-center
                    m-2
                    " style={{ width: "35px", height: "35px" }}>
                    <i className="fa fa-star-o" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    );
}

export default MovieItem;