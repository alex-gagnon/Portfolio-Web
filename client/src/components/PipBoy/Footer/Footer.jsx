import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: "",
            author: ""
        }
    }

    componentDidMount() {    
        if (process.env.NODE_ENV === 'test') {
            this.setState({
                quote: "Testing Quote",
                author: "Testing Author"
            })
        }
        else {
            fetch('/api/v1/quotes/random', {headers: {"accepts": "application/json"}})
            .then(res => res.json())
            .then(data => this.setState(data))
            .catch(err => {
                console.log(err)
            })
        }  
    }

    render() {        
        return (            
            <footer>
                <div id="quotes-block">
                    <p>“{this.state.quote}”</p>
                    <p>- {this.state.author}</p>
                </div>
            </footer>
        )
    }
}

export default Footer