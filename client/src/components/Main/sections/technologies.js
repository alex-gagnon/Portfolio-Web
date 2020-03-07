import React from "react";

function technologies() {
    return (
        <section id="about" className="container-fluid">
            <div className="anchor">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">
                            <span className="portfolio-section-header">Latest technologies I've been working with</span>
                        </h3>
                    </div>
                    <div className="card-text">
                        <div className="latest-technologies">
                            <ul>
                                <li>Python</li>
                                <li>Javascript (ES6+)</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                            <ul>
                                <li>HTML & CSS</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                            <ul>
                                <li>Heroku</li>
                                <li>AWS</li>
                                <li>MSSQL</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default technologies;