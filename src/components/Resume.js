import React, {Component} from 'react';
import '../assets/css/resume.css'
import contactInfo from "./_resumeInfo/contactInfo";
import employmentInfo from "./_resumeInfo/employmentInfo";
import skillInfo from "./_resumeInfo/skillInfo";
import educationInfo from "./_resumeInfo/educationInfo";
import extraInfo from "./_resumeInfo/extraInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {resume: {}};
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
        const resume = this.state.resume;

        const contact_info = contactInfo(resume);
        const employment_info = employmentInfo(resume);
        const skill_info = skillInfo(resume);
        const education_info = educationInfo(resume);
        const extra_info = extraInfo(resume);

        return (
            <div id='resume'>
                <Row>
                    <Col>
                        <h1 id="resume-name">{resume.name}</h1>
                        <h2 id="resume-position">{resume.position}</h2>
                        <div>
                            {contact_info}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {employment_info}
                    </Col>
                    <Col>
                        {skill_info}
                        {education_info}
                        {extra_info}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Resume;