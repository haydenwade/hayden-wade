import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { faYoutube, faLinkedin, faFacebook, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import IconLink from '../shared-components/icon-link';

export default function SocialLinks() {
    return (
        <Row>
            <Col>
                <IconLink href='https://youtube.com/haydenty' icon={faYoutube} size={'2x'} />
                <IconLink href='https://www.linkedin.com/in/haydenwade/' icon={faLinkedin} size={'2x'} />
                <IconLink href='https://www.facebook.com/haydenty' icon={faFacebook} size={'2x'} />
                <IconLink href='https://twitter.com/haydenty1' icon={faTwitter} size={'2x'} />
                <IconLink href='https://instagram.com/haydenty1' icon={faInstagram} size={'2x'} />
                <IconLink href='https://github.com/haydenwade' icon={faGithub} size={'2x'} />
            </Col>
        </Row>
    );
}