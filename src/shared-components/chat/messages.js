import React from 'react';
import { Row, Col} from 'react-bootstrap';

const deriveInitials = (fullName)=>{
    const names = fullName.split(' ');

    let result = '';

    if(names.length > 0){
        result += names[0].substr(0,1).toUpperCase();
    }
    if(names.length > 1){
        result += names[names.length - 1].substr(0,1).toUpperCase();
    }

    return result;
}

export const OthersMessage = (props) => {
    return (
        <Row>
            <Col className="text-left">
                <p data-letters-left={deriveInitials(props.username)}>{props.text}</p>
            </Col>
        </Row>
    )
}

export const MyMessage = (props) => {
    return (
        <Row>
            <Col className="text-right">
                <p data-letters-right={deriveInitials(props.username)}>{props.text}</p>
            </Col>
        </Row>
    )
}