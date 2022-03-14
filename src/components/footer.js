import React from 'react'
import '../styles/global.scss'

// Consider adding progress bar for reading

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-credits">
                <p className="caption">Hand crafted with care
                    <span role="img" aria-label="heart">💖</span>
                </p>
                <p className="caption">200 cups of tea were sacrificed in the making of this site
                    <span role="img" aria-label="tea">🍵</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer