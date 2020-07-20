import React, { Component } from "react"
import Button from "react-bootstrap/Button"

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        
        this.onNameChange = this.onNameChange.bind(this)
        this.onEmailChange = this.onEmailChange.bind(this)
        this.onMessageChange = this.onMessageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    resetForm() {
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }

    handleSubmit(event) {
        event.preventDefault()

        fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(resp)
                    return resp.json()
                } else {
                    console.log(resp)
                }
            })
            // .then(json => {
            //     if (json.status === "success") {
            //         alert("Message sent.")
            //         this.resetForm()
            //     } else {
            //         alert("Message failed to send.")
            //     }
            // })

    }

    render() {
        return (
            <form id="contact-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" 
                        value={this.state.name} onChange={this.onNameChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="admin@">Email address</label>
                    <input type="text" className="form-control" aria-describedby="emailHelp"
                        value={this.state.email} onChange={this.onEmailChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" 
                        value={this.state.message} onChange={this.onMessageChange} />
                </div>
                <Button type="submit" size="lg">Submit</Button>
            </form>
        )
    }
}

export default Contact