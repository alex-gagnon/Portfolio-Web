import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import {faMobileAlt} from "@fortawesome/free-solid-svg-icons/faMobileAlt";
import {faHome} from "@fortawesome/free-solid-svg-icons/faHome";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";

library.add(faEnvelope, faMobileAlt, faGithub, faHome);


function contactInfo(resume) {
    return (
        <div>
            {resume.contact &&
            <ul id='contact-info'>
                <li>
                    <FontAwesomeIcon icon='envelope'/> {resume.contact.email}
                </li>
                <li>
                    <FontAwesomeIcon icon="mobile-alt"/> {resume.contact.phoneNumber}
                </li>
                <li>
                    <FontAwesomeIcon icon={['fab', 'github']}/> {resume.contact.github}
                </li>
                <li>
                    <FontAwesomeIcon icon="home"/> {resume.contact.portfolio}
                </li>
            </ul>}
        </div>
    )
}

export default contactInfo;