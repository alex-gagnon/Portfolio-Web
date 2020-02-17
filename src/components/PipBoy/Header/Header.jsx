import React, {Component} from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header>                 
                <nav id="pip-navigation">
                    {this.props.data.map(o => (
                        <div id="nav-item-wrapper" key={"nav-item" + o._id}>
                            <div className={o.isActive 
                                ? "nav-item-border active"
                                : "nav-item-border"}></div>
                            <div>
                                <span id={"nav-item-" + o._id} 
                                className="nav-item"
                                onClick={this.props.handleClick}>{o.name.toUpperCase()}</span>
                            </div>
                        </div>
                    ))}
                </nav>
            </header>
        )
    }
}

export default Header;