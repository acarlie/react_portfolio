import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function IconContainerInner (props) {
    const info = props.info ? 'icon-container-info' : '';
    return (
        <div className={`icon-container ${info}`}>
            <div className='icon-content'>
                {props.children}
            </div>
            <span className='icon'>
                <i className={`fas fa-${props.icon || 'info'}`}></i>
            </span>
        </div>
    );
}

function IconContainer (props) {
    const fade = props.fade ? 'fade-up' : '';
    return (
        <> 
            { 
                fade &&
                <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' offset={0} duration={.5}>
                    <IconContainerInner {...props} />
                </ScrollAnimation>
            }
            { 
                !fade &&
                <IconContainerInner {...props} />
            }
        </>
    )
}

export default IconContainer;