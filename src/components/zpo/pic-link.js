import React from 'react';

export default function PicLink(props) {
    return (
        <a className={'link-icon ' + props.className} target="_blank" href={props.href} rel="noopener noreferrer" >
            <img src={props.src} height={props.height} width={props.width} alt={props.text} />
        </a>
    );
}