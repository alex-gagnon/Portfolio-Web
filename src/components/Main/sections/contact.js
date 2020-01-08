import React from "react";
import Button from "react-bootstrap/Button";

const Contact = () => {
    return (
        <section id="contact" className="container-fluid">
            <div className="card">
                <div className="card-header">
                    <h3 className="text-center">
                        <span className="portfolio-section-header">How to get in touch</span>
                    </h3>
                </div>
                <div className="text-center card-link">
                    <div>
                        <Button variant="outline-info" href="mailto:alexgagnon227@gmail.com">Shoot me an email!</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;