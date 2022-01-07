// Packages
import React from "react"

function SelectorInput(props) {
    return (
        <div>
            <input
                type={props.type}
                id={props.id}
                name={props.name}
                {...props}
            />

            <label htmlFor={props.id}>{props.label}</label>
        </div>
    )
}

export default SelectorInput
