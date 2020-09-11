import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout'; 
import { Container, Row, Col } from 'react-bootstrap';

class AiSwiper extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className='hr-black'>AI Swiper</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        In order to learn more about machine learning I started a side project called AI Swiper. My goal is to build and deploy a model that can accurately identify whether or not a photo meets my
                        dating preferences with >75% accuracy. To begin I knew I had to do the following steps:
                        <br/>
                        <br/>
                        <ol>
                            <li className="nostyle">Step 1: Build an input pipeline</li>
                            <li className="nostyle">Step 2: Build a model</li>
                            <li className="nostyle">Step 3: Train the model</li>
                            <li className="nostyle">Step 4: Test the model</li>
                            <li className="nostyle">Step 5: Improve the model (repeat the process)</li>
                            <li className="nostyle">Step 6: Automate swiping</li>
                        </ol>

                        First I needed input data and lots of it. I knew exactly where to get it, Tinder, Bumble, almost any dating app for that matter, and even Google. I started by building a React.js UI on top of Tinder's API. This would allow me to use Tinder like normal
                        and collect data on the users I swiped on. If you aren't familiar with Tinder, Tinder is a dating app that shows you dating profiles of different women or men within a radius of your location. You can choose to swipe right, if you like the individual, or swipe left,
                        if you don't like the individual. This was a very important part of the project for a few reasons. One being, it allowed me to collect and label data (images, bios, demographics, etc) which I would use later to build the model. Second, it would allow me to 
                        test the model after I built it. Lastly, it gave me a way to visualize the input data and the predictions that the model would output.
                        <br/>
                        <br/>

                        For my initial approach I would build and train the model on only images and then iterate from there based on results. For example, in future iterations I might try including dating profile biographies as an additional input to see if it improves or weakens the accuracy of the model.
                        <br/>
                        <br/>
                        <strong>Tech: </strong> TensorFlow, AWS SageMaker, AWS, Node.js, React.js, Tinder API
                        <br/>
                        <strong>Project Status: </strong>In Progress
                        <br/>
                        <strong>Source Code: </strong><a href="https://github.com/haydenwade/ai-swiper" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default withPageLayout(AiSwiper);