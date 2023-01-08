import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { faYoutube, faLinkedin, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import IconLink from '../../shared-components/icon-link';

export default function SocialLinks() {
    return (
        <Row>
            <Col className='social-links'>
                <IconLink href='https://www.youtube.com/channel/UCoFZsE7M5Bw_RK-7p3VRsnQ' icon={faYoutube} size={'2x'} />
                <IconLink href='https://www.linkedin.com/company/zeroplusonepodcast' icon={faLinkedin} size={'2x'} />
                <IconLink href='https://www.facebook.com/zeroplusonepodcast' icon={faFacebook} size={'2x'} />
                <IconLink href='https://www.twitter.com/zeroplusonepod' icon={faTwitter} size={'2x'} />
                <IconLink href='https://www.instagram.com/zeroplusonepodcast' icon={faInstagram} size={'2x'} />
            </Col>
        </Row>
    );
}