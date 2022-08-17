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
                    {props.secondaryBtnText && <><br/><Button variant={props.secondaryBtnVariant} style={{width:'100%'}}>{props.secondaryBtnText}</Button></> }

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
                            {props.secondaryBtnText && <><br/><Button variant={props.secondaryBtnVariant} style={{width:'100%'}}>{props.secondaryBtnText}</Button></> }
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>
        }
        </>
    )
}

export default PricingCard;