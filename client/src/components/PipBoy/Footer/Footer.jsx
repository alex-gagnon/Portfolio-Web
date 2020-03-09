import React, { Component } from 'react'
import getRandomQuote from '../utilities/randomQuotes'
import './Footer.css'

class Footer extends Component {
    componentDidMount() {
        fetch('/api/v1/quotes', {headers: {"accepts": "application/json"}})
            .then(res => {
                console.log(res)
                return res.json()
            })
            .catch(err => {
                console.log(err)
            })
    }

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