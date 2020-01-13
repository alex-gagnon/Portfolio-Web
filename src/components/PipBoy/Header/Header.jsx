import React, {Component} from 'react';
import './PipBoy.header.css';


const MenuItems = props => (
    <div id={`menu-item-${props.item.id}`}>
        <span>{props.item.text}</span>
    </div>
)

let id = 0

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: []
        }
    }

    componentDidMount() {
        this.setState({
            menuItems: this.state.menuItems
        })
    }

    toggleActive(id) {
        this.setState({
            menuItems: this.state.menuItems.map(menuChild => {
                if (menuChild.id !== id) return menuChild
                return {
                    id: menuChild.id,
                    text: menuChild.text,
                    active: !menuChild.active
                }
            })
        })
    }

    render() {

        return (
            <div>                
                <nav>
                {this.state.menuItems.map(item => 
                    <MenuItems className="menu-item"
                    key={"menu-item" + item.id}
                    item={item}
                    onToggle={() => this.toggleActive(item.id)} />
                )}
                </nav>  
            </div>
        )
    }
}

export default Header;