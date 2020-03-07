import React, { Component } from 'react'
import getRandomQuote from '../utilities/randomQuotes'
import './Footer.css'

class Footer extends Component {
    render() {
        let randomQuote = getRandomQuote()
        
        return (            
            <footer>
                <div id="quotes-block">
                    <p>“{randomQuote.quote}”</p>
                    <p>- {randomQuote.author}</p>
                </div>
            </footer>
        )
    }
}

export default Footer