import React, {Component} from 'react';
import {PDFExport} from '@progress/kendo-react-pdf';
import Resume from './Resume'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class GeneratePDF extends Component {
    resume;

    constructor(props) {
        super(props);

        this.exportPDF = this.exportPDF.bind(this);
    }

    exportPDF = () => {
        this.resume.save()
    };

    render() {

        return (
            <Col id="resume-container" className='justify-content-center' style={{backgroundColor: "#333"}}>
                <ButtonToolbar className='justify-content-center'>
                    <Button variant='primary' onClick={this.exportPDF}>download</Button>
                </ButtonToolbar>
                <Row key='pdf-page' id='pdf-page'>
                    <Col key='pdf-col'>
                        <PDFExport key='pdf-export'
                                   author="Alexander Gagnon"
                                   fileName="Alexander_Gagnon_Resume.pdf"
                                   title="Alexander Gagnon Resume"
                                   paperSize="A3"
                                   scale={1}
                                   subject="Resume"
                                   keywords={"experience, education, skills, " +
                                   "interests, projects, qa, development, javascript, css, html, python," +
                                   "jquery, mongodb, mysql, sql, heroku, git, jira, fiddler, postman, node,js," +
                                   "express, flask, website, software qa, aws, mssql"}
                                   ref={(r) => this.resume = r}>
                            {/* Include Resume component */}
                            <Resume key={'super-resume'}/>
                        </PDFExport>
                    </Col>
                </Row>
            </Col>
        )
    }
}

export default GeneratePDF;