import React from "react";


const Introduction = props => {
    return (
        <section className="portfolio-section container-fluid anchor">
            <div className="content">
                <h1 id="portfolio-intro-header">
                    <span>{props.resume.name}</span>
                </h1>
                <h2 id="portfolio-intro-summary m-5">
                    <span id="portfolio-intro">
                        I am currently working as a {(props.resume.position && props.resume.position.toLowerCase())}
                    </span>
                </h2>
            </div>
        </section>
    )
}

Introduction.defaultProps = {
    resume: {
        name: 'Alex Gagnon',
        position: 'Junion Software Developer'
    }
}

export default Introduction;
