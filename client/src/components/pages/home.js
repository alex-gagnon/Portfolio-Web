import React, { Component } from "react"

class Home extends Component {
    
    render() {
        if (this.props.value) {            
            return (
                <div>
                    {this.props.value.map((para, i) => (
                        <p id={`home-para-${i}`} key={`home-para-${i}`} className="user-para">
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