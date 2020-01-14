import React, {Component} from 'react';
import './PipBoy.header.css';


const MenuItems = props => (
    props.children.map((item, i) => (     
        <div className="pip-navigation__wrapper">
            <div className={i === 0 ? 'active pip-navigation__border' : 'pip-navigation__border'}></div>
            <div id={'menu-item-' + i} 
                key={'menu-item-' + i}
                className={'menu-items'}>
                <span>{item.toUpperCase()}</span>
            </div>
        </div> 
        )
    )
)

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            children: []
        }
    }

    componentDidMount() {
        this.setState({
            children: this.props.children
        })
    }

    render() {
        return (               
            <nav className="pip-navigation">
                <MenuItems children={this.props.children} />
            </nav>
        )
    }
}

export default Header;