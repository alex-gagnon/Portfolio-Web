import React, {Component} from 'react'
import './Main.css'

class Main extends Component {
    render() {
        return (
            <main id="pip-main">
                <div id="pip-main-content">
                    {this.props.data.map(o => (                        
                        o.isActive 
                        ? o.value.map((p, index) => (
                            <p key={"main-para-" + index}>{p}</p>
                        )) 
                        : ""
                    ))}
                </div>
            </main>
        )
    }
}

export default Main;