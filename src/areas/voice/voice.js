import React from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap';

class Voice extends React.Component {
    render() {
        return (
            <Grid className='page-content'>
                <Row>
                    <Col md={12} xs={12}>
                        <Row>
                            <div className='page-img'>
                                <Image src='assets/voicebanner3.png' alt='voice by hayden' rounded responsive />
                                <Button href='mailto:voice@haydenwade.com?subject=I Need Voice ASAP&body=Hi Hayden, I would love to chat about how voice can save my company time and money.' bsSize='lg'>Contact Me<br/>To Get Started</Button>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        <h3 className='hr-black'>Voice By Hayden</h3>
                        <h4>Do more with less. The power of voice is the future.</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} xs={12}>
                        I help businesses and their clients save time on day to day operations by using voice artificial intelligence(AI).            
                        <br/>
                        <br/>
                        TL;DR - Voice saves time.
                        <br/>
                        <br/>
                        There are only 24 hours in a day and our days get more and more busy with kids, work, and chores. 
                        To think you can save time by setting a alarm clock via voice rather than by hand is mind blowing. Here are some facts: 
                        the average typing speed is around 33 words per minute and the average speed of speaking is around 120 words per minute. 
                        If you do some quick math speaking is <b>4X</b> faster than typing. So if you think about the amount of time you spend
                        a day typing (texting, emails, searching websites, clicking buttons, etc.) and cut that in half twice, that's how much time you would save by using voice. 
                        Correction, you would actually save all of the time you spent typing if you did it via voice because you can <b>multi-task </b> 
                        with voice. Voice doesn't require your <b>visual and physical attention</b>. 
                        If you want to go a bit overboard you could shower and order dinner in one sentence.
                        <div className="text-center">
                            <br />
                            <i className="fa fa-microphone fa-2x"></i>
                            <br />
                            "The reason there are 60 year old men in here texting… it's faster. […] 
                            Speed is something we are addicted to. Do you know why you don't care about privacy? 'Cause you're willing to give it up for speed." ~ Gary Vaynerchuk
                            <br />
                            <br />
                            "Voice, Like Emojis, Lets Us Say More Faster" ~ Paul Cutsinger
                            <br />
                            <br />
                            <a rel="noopener noreferrer" target="_blank" href="https://developer.amazon.com/blogs/alexa/post/26c76734-3445-4d5f-8c78-aa1eae4100cf/gary-vaynerchuk-voice-will-explode-and-drive-companies-the-size-of-facebook-instagram">Alexa Blogs: Gary Vaynerchuk: Voice Will ‘Explode’ and Drive Companies the Size of Facebook, Instagram</a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Voice;