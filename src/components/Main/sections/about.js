import React from "react";

const about = () => {
    return (
        <section id="about" className="container-fluid">
            <div className="anchor">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">
                            <span className="portfolio-section-header">About me</span>
                        </h3>
                    </div>
                    <div className="card-text">
                        <p>
                        <span>Hello! I'm Alex, a software quality assurance specialist in Newburyport, MA who has
                        been working towards becoming a junior software developer. I develop automation scripts,
                        full-stack websites, and am always looking to learn more.</span>
                        </p>
                        <p>
                        <span>After high school I enlisted into the US Army, where I served for 4 years before
                            deciding to pursue an education full-time.</span></p>
                        <p>
                        <span>I attended the University of Massachusetts - Boston, graduating with highest honors.
                            Shortly after, I joined the Transparent Language QA team where I worked on manual and automated testing web applications and mysql and mongodb
                            databases.

                            Most recently, I have joined the Firebrand Technologies QA Team.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about;