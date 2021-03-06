import React, { Component } from "react"

class About extends Component {
    
    render() {
        if (this.props.value) {            
            return (
                <div>
                    {this.props.value.map((para, i) => (
                        <p id={`about-para-${i}`} key={`about-para-${i}`} className="user-para">
                            {para}
                        </p>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    <h2>I'm not authorized to tell you that.</h2>
                </div>
            )
        }
    }
}

export default About