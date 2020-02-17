import React, {Component} from 'react'
import './PipBoy.css'
import data from '../Utils/data'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

class PipBoy extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let target = e.target
        this.setHeader(target)
    }

    setHeader(target) {
        let targetId = parseInt(target.id.split("nav-item-").join(""))
        this.setState({
            data: this.state.data.map((item, index) => {
                // remove highlight from all items
                item.isActive = false
                if (targetId !== item._id) return item
                console.log(item)
                return {
                    _id: item._id,
                    name: item.name,
                    value: item.value,
                    isActive: !item.isActive,
                }
            })
        })
    }

    componentDidMount() {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div id="console">
                <div id="screen-border">
                    <div id="screen">
                        <div id="screen-reflection"></div>
                        <div id="screen-scan"></div>
                        <Header {...this.state} handleClick={this.handleClick} />
                        <Main {...this.state} />
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default PipBoy;