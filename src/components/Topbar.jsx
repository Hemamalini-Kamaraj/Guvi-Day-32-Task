import React from 'react'
import { Link } from 'react-router-dom';

function Topbar() {

    return (
        <nav className=" container-fluid p-1 shadow fixed-top navbar navbar-light bg-white "
            style={{ position: "sticky" }} >
            <div  className="container px-4 px-lg-5">
                <div className="d-flex flex-start justify-content-center p-2 fw-bold" id="navbarSupportedContent">
                    <span className="navbar-brand fw-bold">
                        <h2>Library Management</h2>
                    </span>
                </div>
                <div className="d-flex justify-content-center p-2 fw-bold" id="navbarSupportedContent">
                    <Link className="nav-link" to="/portal/bookscorner">
                        <h4>BooksCorner</h4>
                    </Link>
                </div>
                <div className="d-flex justify-content-center p-2 fw-bold" id="navbarSupportedContent">
                    <Link className="nav-link" to="/portal/library">
                        <h4>Select Books</h4>
                    </Link>
                </div>
                <div className="d-flex justify-content-center p-2 fw-bold" id="navbarSupportedContent">
                    <Link className="nav-link" to="/">
                        <h4>LogOut</h4>
                    </Link>
                </div>
            </div>
        </nav>

    )
}

export default Topbar;