import React, {Component} from 'react';
import Alert from "react-bootstrap/Alert";

class InProgress extends Component {
    render() {
        return (
            <Alert variant="info">
                <Alert.Heading>Work in progress!</Alert.Heading>
                <hr/>
                <p style={{fontSize: "16px"}}>Welcome to my Portfolio!<br/>
                    It is currently under construction, but you can view my resume
                    by using the button at the top right of the screen.</p>
            </Alert>
        );
    }
}

export default InProgress;