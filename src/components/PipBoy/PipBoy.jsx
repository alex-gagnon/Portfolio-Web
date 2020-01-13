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
        console.log(this.props.nav)

        return (
            <div className="console">
                <div className="screen-border">
                    <div className="screen">
                        <div className="screen-reflection"></div>
                        <div className="screen-scan"></div>
                        <Header menuItems={this.props.nav}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default PipBoy;