import React from 'react';
import './fadeInHoc.css';
//TODO: add props for delay time and fade in speed
class FadeInHoc extends React.Component{
    render(){
        return (<div className='fade-it hvr-grow'>{this.props.children}</div>);
    }
}
export default FadeInHoc;