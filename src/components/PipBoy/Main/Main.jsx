import React, {Component} from 'react';


const Offline = (props) => (
    <div><h1>{props.text.toUpperCase()}</h1></div>
)


class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: 'APP OFFLINE'
        }
    }

    render() {
        return (
            <div className="content">
                <Offline text={this.state.text} />
            </div>
        )
    }
}

export default Main;