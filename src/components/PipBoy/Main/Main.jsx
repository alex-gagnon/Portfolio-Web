import React, {Component} from 'react';
import './PipBoy.main.css'

class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <main id="pip-main">
                <div>
                    <p>Hey there,</p>
                    <p>
                        I'm Alex, a software quality assurance specialist.
                        I develop quality assurance solutions with test automation and
                        performance testing, as well as API and Database testing.
                    </p>
                    <p>
                        My portfolio is currently undergoing a redesign. So please bear with me
                        while it is in progress.
                    </p>
                </div>
            </main>
        )
    }
}

export default Main;