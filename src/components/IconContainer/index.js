import React from 'react';

function IconContainer (props) {
    return (
        <div className='icon-container icon-container-info'>
            <div className='icon-content'>
                {props.children}
            </div>
            <span className='icon'><i className={`fas fa-${props.icon || 'info'}`}></i></span>
        </div>
    )
}

export default IconContainer;