import React from 'react';

function Button (props) {
    return (
        <button className='btn' onClick={() => { props.handler(props.title) }}>{props.title}</button>
    );
}

export default Button;