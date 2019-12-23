import React from "react";

function skillInfo(resume) {
    return (
        <div>
            <h3 className="resume-header">Skills</h3>
            {resume.skills &&
            resume.skills.map(({name, skillSet}) =>
                <div key={name} className="additional-info">
                    <h4>{name}</h4>
                    <p>{skillSet.join(', ')}</p>
                </div>
            )}
        </div>
    )
}

export default skillInfo;