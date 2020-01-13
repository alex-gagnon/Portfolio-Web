import React, {Component} from 'react';
import './PipBoy.css'
import Header from './Header/Header';

class PipBoy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    toggleActive() {
        this.setState(prevState => ({
            isActive: !prevState.isActive
        }));
    }

    render() {
        const {isActive} = this.state;
        console.log(this.props.nav)

        return (
            <div className="screen-border">
                <div className="screen">
                    <Header menuChildren={this.props.nav}/>
                </div>
            </div>
        )
    }
}

export default PipBoy;