// Packages
import React from "react"

// Components
import Helmet from "./Helmet"
import Container from "./Container"

function Page(props) {
    return (
        <>
            <Helmet
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Container>{props.children}</Container>
        </>
    )
}

export default Page
