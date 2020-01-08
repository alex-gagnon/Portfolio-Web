import React from "react";


const introduction = (resume) => {
    return (
        <section className="portfolio-section container-fluid anchor">
            <div className="content">
                <h1 id="portfolio-intro-header">
                    <span>{resume.name}</span>
                </h1>
                <h2 id="portfolio-intro-summary m-5">
                    <span id="portfolio-intro">
                        I am currently working as a {(resume.position && resume.position.toLowerCase())}
                    </span>
                </h2>
            </div>
        </section>
    )
}

export default introduction;
