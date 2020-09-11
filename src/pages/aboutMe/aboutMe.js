import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Container, Row, Col} from 'react-bootstrap';

class AboutMe extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <h1 className='hr-black'>About Me</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={8} xs={12}>
                        I am a software engineer, born and raised in Wisconsin and have now fled to the land of 10,000 Lakes,
                        city with the most fortune 500 companies per capita, Minneapolis. My passion for computers came at a young age,
                        around the time of the first iMac (I had a green one). At the age of 13 I spent my evenings after school editing the markup of my MySpace profile;
                        this was the stepping stone to my future. In high school I took a web development class and began helping my
                        dad make websites. With little ambition for anything else and the tech industry booming I decided to go to college for Software Engineering. I attended the 
                        University of Wisconsin - Platteville and graduated with a Bachelor's Of Science in Software Engineering in 2016. College is really when 
                        my mind began to flood with new ideas and creations. Working at a small startup in the basement of city hall to working at a Fortune 200 company
                        has given me the exposure and knowledge to build high quality software that delivers value to customers. Today I build software for clients all over the world and host
                        the <a href="https://www.zeroplusonepodcast.com" target="_blank" rel="noopener noreferrer">Zero Plus One Podcast</a> which aims to help aspiring software engineers land 
                        their dream job.
                    </Col>
                    <Col md={4} xs={12} className='text-center'>
                        <img src='assets/haydenwade5.jpg' alt='hayden wade is a software engineer from Minneapolis, Minnesota.' height='350'/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withPageLayout(AboutMe);