// Use rfc to get this boiler plate
import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

// props is used to make a variable which when passed through App.js
// we can excess it anywhere so only one code but we can modify it.
// Data passed from parent to child using props in curly braces
export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">About {props.about}</Link>
                        </li>
                    </ul>

                    {props.searchBar ? <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>: ""}
                </div>
            </div>
        </nav>
    )
}

// If user doesnt pass then what should be defaut value
Header.defaultProps = {
    title: "Your Title Here",
}

// Here we can define things like title must be a string if not give a warning
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
} 