import React, { Component } from "react"

class Home extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return (
            <div>
                {this.props.value.map(para => (
                    <h2>
                        {para}
                    </h2>
                ))}
            </div>
        )
    }
}

export default Home