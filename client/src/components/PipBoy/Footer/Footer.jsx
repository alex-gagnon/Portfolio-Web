import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: ""
        }
    }

    componentDidMount() {
        fetch('/api/v1/quotes/random', {headers: {"accepts": "application/json"}})
            .then(res => {
                console.log(res)
                this.setState({
                    quote: res
                })
                return res.json()
            })
            .catch(err => {
                console.log(err)
            })
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