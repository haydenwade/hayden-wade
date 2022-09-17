import { Card, Button, Collapse } from "react-bootstrap"
import React, { useState } from 'react';
//https://github.com/pricing

function ClickableListItem(props){
    const [open, setOpen] = useState(false);
    const item = props.item;

    return (
    <>
        <li onClick={()=>setOpen(!open)}>
           {item.text}
        </li>
        <Collapse in={open}>
            <div id={props.id}>
                {item.explanation}
            </div>
        </Collapse>
    </>
    )
}

function CardFooter(props){
    return (
        <Card.Footer>
            <ul>
                { props.items.map((item,i)=>
                    <ClickableListItem item={item} key={i} id={i}/>
                )}
            </ul>
        </Card.Footer>
    )
}

function PricingCard(props){
    return (
        <>
        {!props.isHighlighted &&
            <Card style={{marginTop:'3em'}}>
                <Card.Body style={{textAlign:'center'}}>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                    <Card.Text>
                    {props.body}
                    </Card.Text>
                    <Button variant={props.primaryBtnVariant} style={{width:'100%'}}>{props.primaryBtnText}</Button>
                    {props.secondaryBtnText && <Button variant={props.secondaryBtnVariant} style={{width:'100%'}}>{props.secondaryBtnText}</Button> }

                </Card.Body>
                { props.items && 
                    <CardFooter
                        items={props.items}
                    />
                }
            </Card>
        }
        { props.isHighlighted &&
            <Card style={{backgroundColor:'#64acff'}}>
                <Card.Body>
                    <Card.Title style={{textAlign:'center', color:'white'}}>{props.highlightText}</Card.Title>
                    <Card>
                        <Card.Body style={{textAlign:'center'}}>
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
                            <Card.Text>
                            {props.body}
                            </Card.Text>
                            <Button variant={props.primaryBtnVariant} style={{width:'100%'}}>{props.primaryBtnText}</Button>
                            {props.secondaryBtnText && <Button variant={props.secondaryBtnVariant} style={{width:'100%'}}>{props.secondaryBtnText}</Button>}
                        </Card.Body>
                        { props.items && 
                            <CardFooter
                                items={props.items}
                            />
                        }
                    </Card>
                </Card.Body>
            </Card>
        }
        </>
    )
}

export default PricingCard;

// //Example:
// <Row style={{paddingTop:'2em'}}>
//                     <Col md={4} sm={12}>
//                         <PricingCard
//                             title='Career Coaching'
//                             subtitle='10 minute call'
//                             body='Find out if Hayden is the right coach for you.'
//                             primaryBtnVariant='light'
//                             primaryBtnText='Schedule a free intro call'
//                             items={[
//                                 {text:'10 minute call', explanation:'10 minutes to ask anything you want. Gain an understanding of what it would be like to work 1-on-1 with Hayden.'},
//                             ]}
//                         />
//                     </Col>
//                     <Col md={4} sm={12}>
//                         <PricingCard
//                             title='Salary Negotiation'
//                             subtitle="Get Paid What You're Worth"
//                             body="$600"
//                             primaryBtnVariant='dark'
//                             primaryBtnText='Book Now'
//                             isHighlighted={true}
//                             highlightText='MOST POPULAR'
//                             items={[
//                                 {text:'Resume review', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
//                                 {text:'Private community', explanation:'Access to a private facebook group where'},
//                                 {text:'LinkedIn review', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
//                                 {text:'Establish plan', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'}
//                             ]}
//                         />
//                     </Col>
//                     <Col md={4} sm={12}>
//                         <PricingCard
//                             title='Resume Review'
//                             subtitle='Plan, prep, negotiate, sign'
//                             body={<><strike>$252</strike> $231 per hour</>}
//                             primaryBtnVariant='light'
//                             primaryBtnText='Contact Sales'
//                             secondaryBtnVariant='dark'
//                             secondaryBtnText='Start a free trial'
//                             items={[
//                                 {text:'Interview Prep', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
//                                 {text:'Mock Interviews', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
//                                 {text:'Salary Negotiation', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'},
//                                 {text:'Support', explanation:'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer.'}
//                             ]}
//                         />
//                     </Col>
//                 </Row>