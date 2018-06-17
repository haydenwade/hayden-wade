import React from 'react';
import { Grid, Row, Col, PageHeader} from 'react-bootstrap';

class AboutMe extends React.Component {
    componentWillMount() {
        let element = document.getElementsByTagName('body');
        element[0].style.backgroundImage = "url('assets/bg5.jpg')";
        element[0].style.backgroundSize = "cover";
    }
    render() {
        return (
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <PageHeader className='hr-black'>About Me</PageHeader>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12} className='body-text'>
                        I am a software developer, born and raised in Wisconsin and have now fled to the land of 10,000 Lakes,
                        city with the most fortune 500 companies per capita, Minneapolis. My passion for computers came at a young age,
                        around the time of the first iMac (I had a green one). At the age of 13 I spent my evenings after school editing the markup of my MySpace profile;
                        this was the stepping stone to my future. In highschool I took a web development class and began helping my
                        dad make websites. With little ambition for anything else and the tech industry booming I decided to go to college for Software Engineering.
                        From there on my mind began to flood with new ideas, creations.
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export default AboutMe;