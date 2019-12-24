import React, {Component} from 'react';
import about from "./sections/about";
import experience from "./sections/experience"
import contact from "./sections/contact";
import introduction from "./sections/introduction";
import technologies from "./sections/technologies";
import Arrow from '../../assets/images/returnArrow.svg'
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {resume: []};
    }

    componentDidMount() {
        fetch('/api/resume')
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
        let introduction_info;
        let about_info;
        let technology_info;
        let experience_info;
        let contact_info;


        const resume = this.state.resume;

        if (resume) {
            introduction_info = introduction(resume);
            about_info = about();
            technology_info = technologies();
            experience_info = experience(resume);
            contact_info = contact();
        }

        return (
            <div key={'portfolio'} id="portfolio">
                <div key={resume.id}>
                    <section id="portfolio-intro-info" className="portfolio-section">
                        {introduction_info}
                    </section>
                    <section id="portfolio-about-info" className="portfolio-section">
                        {about_info}
                    </section>
                    <div id="portfolio-about-info" className="portfolio-section">
                        {technology_info}
                    </div>
                    <section id="portfolio-experience-info" className="portfolio-section">
                        {experience_info}
                    </section>
                    <section id="portfolio-contact-info" className="portfolio-section">
                        {contact_info}
                    </section>
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