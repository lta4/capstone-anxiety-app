import React from "react";
import Layout from "../components/layout"

export default function quoteList(props) {
    console.log(props)
    let base = props.pageContext.blog
    return (
        <Layout>
            <h1>{base.a}</h1>
            <h2>"{base.q}"</h2>
        </Layout>
    )
}