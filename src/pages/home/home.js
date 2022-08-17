import React from 'react';
import withPageLayout from '../../components/page-container/withPageLayout';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Chat from '../../shared-components/chat/chat';
import PricingCard from '../../components/pricing-card/pricing-card';
//TODO: finish pricing; could split into "switching careers", "promotion", "growth" 
//instead of just interview process (search to sign)
//or is the highest include course?
class HomeComponent extends React.Component {
    render() {
        return (
            <Container>
                {/* <Row>
                    <Col className="text-center">
                        <h1>Hi, I'm Hayden Wade.</h1>
                        If you ask me something I'll reply or my  AI assistant, Steve, will if I'm busy adventuring or at work.
                        <br/>
                        [Beta]
                    </Col>
                </Row> */}
                {/* <Row>
                    <Chat />
                </Row>
                <Row>
                    <Col className="text-center">
                        <a href="/about"><small>Read about me instead?</small></a>
                    </Col>
                </Row> */}
                <Row className="align-items-center">
                    <Col md={6} sm={12}>
                    <h1>Hi, I'm Hayden Wade.</h1>

                        I am a software engineer, creator, and adventurer who enjoys helping people learn new technology and 
                        how to build quality software that scales. Here you will find my professional experience and side projects
                        that I've created over the years, as well as, links to all my socials where I am most active.
                    </Col>
                    <Col md={6} sm={12}>
                        <Image src='assets/haydenwade.jpg' alt='Hayden sitting serious at a desk.' fluid/> 
                    </Col>
                </Row>
                <Row className="align-items-center" style={{paddingTop:'2em'}}>
                    <Col md={6} sm={12}>
                        <Image src='assets/mentor.jpg' alt='Mentoring student on video call.' fluid/> 
                    </Col>
                    <Col md={6} sm={12}>
                        <h1>Growth Coaching</h1>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae lectus pulvinar, posuere erat suscipit, dapibus libero. Morbi ac tincidunt felis, at lacinia lectus. Nam lobortis accumsan odio eu congue. Proin vel gravida leo.
                    </Col>
                </Row>
                <Row style={{paddingTop:'2em'}}>
                    <Col md={4} sm={12}>
                        <PricingCard
                            title='Intro'
                            subtitle='10 min advisory call'
                            body='$0 per year forever'
                            primaryBtnVariant='light'
                            primaryBtnText='Schedule a free intro call'
                            items={[
                                {text:'private community', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                                {text:'1 hr call', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                                {text:'2022 conference tickets', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'}
        
                            ]}
                        />
                    </Col>
                    <Col md={4} sm={12}>
                     <PricingCard
                        title='Plan'
                        subtitle='Establish plan and Q&A'
                        body={<><strike>$48</strike> $44 for 30 min call</>}
                        primaryBtnVariant='dark'
                        primaryBtnText='Continue with Plan'
                        isHighlighted={true}
                        highlightText='MOST POPULAR'
                        items={[
                            {text:'Resume review', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                            {text:'LinkedIn review', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                            {text:'Establish plan', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'}
                        ]}
                    />
                    </Col>
                    <Col md={4} sm={12}>
                        <PricingCard
                            title='Offer'
                            subtitle='Plan, prep, negotiate, sign'
                            body={<><strike>$252</strike> $231 per hour for the first 12 months</>}
                            primaryBtnVariant='light'
                            primaryBtnText='Contact Sales'
                            secondaryBtnVariant='dark'
                            secondaryBtnText='Start a free trial'
                            items={[
                                {text:'Interview Prep', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                                {text:'Mock Interviews', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                                {text:'Salary Negotiation', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
                                {text:'Support', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'}
                            ]}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withPageLayout(HomeComponent);