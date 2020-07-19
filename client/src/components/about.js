import React, { Component } from "react"

class About extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                {this.props.value.map(para => (
                    <p className="user-para">
                        {para}
                    </p>
                ))}
            </div>
        )
    }
}

export default About