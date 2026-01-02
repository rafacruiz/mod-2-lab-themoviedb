
function Jumbotron({ title = 'Welcome to dataMovie' }) {
    return (
        <div className="jumbotron bg-dark bg-gradient text-white">
            <div className="py-5 container text-center">
                <div className="row py-5">
                    <div className="col-6 mx-auto">
                        <h1 className="display-6 fw-light">{ title }</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;