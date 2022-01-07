// Packages
import React from "react"
import { Link } from "react-router-dom"

function Button(props) {
    return props.to ? (
        <Link to={props.to} {...props}>
            {props.children}
        </Link>
    ) : (
        <button {...props}>{props.children}</button>
    )
}

export default Button
