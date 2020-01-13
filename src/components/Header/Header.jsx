import React, {Component} from 'react';
import './Header.pip.css';


class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav>
                    <span>INTRO</span>
                    <span>PROJECTS</span>
                    <span>MORE</span>
                </nav>   
            </div>
        )
    }
}

export default Header;