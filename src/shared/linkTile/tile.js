import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import  {Link} from 'react-router-dom';
import './tile.css';

class Tile extends React.Component{
    render(){
        return (
            <Link className='not-link' to={this.props.linkTo}>
                <Jumbotron className='text-center'>
                    <i className={this.props.icon}/>
                    <br/>
                    <h3>{this.props.text}</h3>
                </Jumbotron>
            </Link>
        )
    }
}
export default Tile