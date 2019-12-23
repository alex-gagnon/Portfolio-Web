import React from "react";
import friendlyDates from "../_includes/friendlyDates"


function employmentInfo(resume) {
    return (
        <div>
            <h3 className="resume-header">Experience</h3>
            {resume.employment &&
            resume.employment.map(({_id, name, position, address, employment_status, experience}) =>
                <div key={_id} className="employment-info">
                    <h4>{position} <span style={{color: '#888'}}>@ {name}</span></h4>
                    <h5>
                        {
                            `${friendlyDates(employment_status.started)} - 
                            ${(
                                (employment_status.current && 'Present') ||
                                (!employment_status.current && friendlyDates(employment_status.ended))
                            )} // ${address}`
                        }
                    </h5>
                    <ul>
                        {experience.map((item) =>
                            <li key={item}>
                                <span className='angle-right-arrows'>&#187;</span> {item}
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default employmentInfo;