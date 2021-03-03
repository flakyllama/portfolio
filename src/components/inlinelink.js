import React from 'react'
import '../styles/global.scss'

// Consider adding reverse flow when hovering and full link expansion when hovering over destination 

const InlineLink = (props) => {
    return(
        <>
            <span className="link-inline">
                <a href={props.link} target="_blank" rel="noopener noreferrer">{props.link_text}</a>
                <div className="link-inline-line" />
                <div className="link-inline-tail" />
                <aside>
                    <a className="destination" href={props.link}>{props.destination}</a>
                </aside>
            </span>
        </>
    )
}

export default InlineLink