import React, { Component } from "react"

class Projects extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        if (this.props.value) {            
            return (
                <div>
                    {this.props.value.map((para, i) => (
                        <p id={`projects-para-${i}`} key={`projects-para-${i}`} className="user-para">
                            {para}
                        </p>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    <h2>I'm H.O.W.A.R.D, it's my job to keep you alive.</h2>
                </div>
            )
        }
    }
}

export default Projects