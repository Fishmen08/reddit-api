import React from "react";

export default function Article(props) {
    return (
        <article>
            <a href={'https://reddit.com' + props.article.permalink} rel="noreferrer" target='_blank'>
                <h3>{props.article.title}</h3>
                <h5>{props.article.author}</h5>
                {/* <p>{props.article.selftext} </p> */}
            </a>
        </article>
    )
}