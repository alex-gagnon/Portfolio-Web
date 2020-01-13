import React, {Component} from 'react';
import './Header.pip.css';


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isActive: false,
            menuChildren: []
        }

        this.toggleActive = this.toggleActive.bind(this);
    }

    componentDidMount() {
        this.setState({
            menuChildren: this.props.menuChildren
        })
    }

    toggleActive() {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        const menuChildren = this.state.menuChildren.map((item, i) => 
            <div className={this.state.isActive ? 'active' : null}>
                <span className={`menuItems`}
                    id={`menu-item-${i}`} 
                    key={`menu-item-${i}`}
                    onClick={this.toggleActive}>{item.toUpperCase()}</span>
            </div>
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