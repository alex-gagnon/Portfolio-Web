import React, {Component} from 'react';
import './PipBoy.header.css';
import PropTypes from 'prop-types';


const MenuItems = props => (
    <div key={'menu-item-' + props.item.id}
        className={'pip-navigation__wrapper'}>
        <div id={'flag-id-' + props.item.id} 
            className={props.item.flagActive
                ? 'pip-navigation__border active' 
                : 'pip-navigation__border'}>
        </div>
        <div id={'menu-item-' + props.item.id}
            className={'menu-items'}
            onLoad={props.initActive}
            onClick={props.onToggle}>
            <span>{props.item.text.toUpperCase()}</span>
        </div>
    </div>
)

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            children: [{id: 0, text: '', flagActive: false}]
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.children !== prevProps.children) {
            this.setState({
                children: this.props.children.map(item => {
                    return {
                        id: item.id,
                        text: item.text,
                        flagActive: item.id === 0 ? true : false
                    }
                })
            })
        }
    }

    toggleActive(id) {
        this.setState({
            children: this.state.children.map(item => {
                // remove highlight from all items
                item.flagActive = false
                if (item.id !== id) return item
                return {
                    id: item.id,
                    text: item.text,
                    flagActive: !item.flagActive,
                }
            })
        })
    }

    render() {
        return (               
            <nav className="pip-navigation">                
                {this.state.children.map(item => (
                    <MenuItems className="pip-navigation__super"
                        key={'pip-nav__item-' + item.id}
                        item={item}
                        onToggle={() => this.toggleActive(item.id)}/>
                        )
                    )
                }
            </nav>
        )
    }
}

Header.propTypes = {
    children: PropTypes.array.isRequired
}

export default Header;