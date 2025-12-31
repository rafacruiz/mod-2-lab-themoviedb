import { Link } from "react-router-dom";

function Navbar() {
  
    return (
        <nav className="navbar bg-dark bg-opacity-75" >
            <div className="container">
                <Link className="navbar-brand fw-semibold text-white d-flex align-items-center gap-2" to="/">
                    <i className="fa fa-desktop" aria-hidden="true"></i> 
                    <span>dataMovie</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;