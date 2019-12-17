import React from 'react';

function IconContainer (props) {
    const info = props.info ? 'icon-container-info' : '';
    const fade = props.fade ? 'fade-up' : '';
    return (
        <div className={`icon-container ${info} aos-init aos-animate`} data-aos={fade}>
            <div className='icon-content'>
                {props.children}
            </div>
            <span className='icon'>
                <i className={`fas fa-${props.icon || 'info'}`}></i>
            </span>
        </div>
    )
}

export default IconContainer;