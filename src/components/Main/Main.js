import React, {Component} from 'react';
import About from "./sections/About";
import Experience from "./sections/Experience"
import Contact from "./sections/Contact";
import Introduction from "./sections/Introduction";
import Skillset from "./sections/Skillset";
import Arrow from '../../assets/images/returnArrow.svg'
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: []
        };
    }

    componentDidMount() {
        fetch('/api/v1/resume')
            .then(res => {
                return res.json()
            })
            .then((resume) => {
                this.setState({resume});
            }).catch((err) => {
                console.log(err);
        });
    }

    render() {
        const resume = this.state.resume;

        return (
            <div key={'portfolio'} class="main">
                <div>
                    <Introduction/>
                    <About/>
                    <Experience/>
                    <Skillset/>
                    <Contact/>
                </div>
                <hr/>
                <Button id="return-to-top" variant="outline-dark" href="/#">
                    <Image src={Arrow} height="45" width="45"/>
                </Button>
            </div>
        )
    }

}

export default Portfolio;