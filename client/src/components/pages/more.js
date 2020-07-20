import React, { Component } from "react"

class More extends Component {
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
                    <h2>I do not have that information.</h2>
                </div>
            )
        }
    }
}

export default More