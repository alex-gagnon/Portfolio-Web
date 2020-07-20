import React, { Component } from "react"

class Home extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        if (this.props.value) {            
            return (
                <div>
                    {this.props.value.map(para => (
                        <p className="user-para">
                            {para}
                        </p>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    <h2>I cannot do that. I'll have to send in a maintenance request.</h2>
                </div>
            )
        }
    }
}

export default Home