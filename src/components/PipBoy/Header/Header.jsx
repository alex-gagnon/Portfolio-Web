import React, {Component} from 'react';
import './Header.pip.css';


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false,
            menuChildren: []
        }
    }

    componentDidMount() {
        this.setState({
            menuChildren: this.props.menuChildren
        })
    }

    render() {
        const menuChildren = this.state.menuChildren.map(
            (item, i) => <span key={i}>{item.toUpperCase()}</span>
            )

        return (
            <div>                
                <nav>
                    {menuChildren}
                </nav>  
            </div>
        )
    }
}

export default Header;