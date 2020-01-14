import React, {Component} from 'react';
import './PipBoy.css'
import Header from './Header/Header';
import Main from './Main/Main';

class PipBoy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navItems: []
        }
    }

    componentDidMount() {
        let navItems = ['intro', 'projects', 'more']
        this.setState({
            navItems: navItems
        })
    }

    render() {
        return (
            <div className="console">
                <div className="screen-border">
                    <div className="screen">
                        <div className="screen-reflection">
                        </div>
                        <div className="screen-scan"></div>
                        <Header children={this.state.navItems}/>
                        <Main />
                    </div>
                </div>
            </div>
        )
    }
}

export default PipBoy;