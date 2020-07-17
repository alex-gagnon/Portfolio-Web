import React, {Component} from 'react'
import './Main.css'

class Main extends Component {
    render() {
        const data = this.props.data

        if (process.env.NODE_ENV === 'test') {
            return (
                <main id="pip-main">
                    <div id="pip-main-content">
                        <p>APP OFFLINE</p>
                    </div>
                </main>
            )
        }
        else {
            return (
                <main id="pip-main">
                    <div id="pip-main-content">
                       <Item data={data} />
                    </div>
                </main>
            )
        }
    }
}

const Item = (props) => (
    <div>
    {props.data.map(o => (                        
        o.isActive 
        ? o.value.map((p, index) => (
            <p key={"main-para-" + index}>{p}</p>
        )) 
        : ""
    ))}
    </div>
)

export default Main;