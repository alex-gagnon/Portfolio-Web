import React, {Component} from 'react';
import './PipBoy.css'
import Header from './Header/Header';
import Main from './Main/Main';


let navItems = ['intro', 'projects', 'more'];
let id = 0;

class PipBoy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            navItems: []
        }
    }

    componentDidMount() {
        this.setState({
            navItems: navItems.map(text => {
                return {id: id++, text: text, flagActive: this.id  === 0 ? true : false}
            })
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
                        <Main text={this.state.text} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PipBoy;