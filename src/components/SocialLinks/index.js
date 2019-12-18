import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function SocialLinks () {
    return(
        <ScrollAnimation animateIn="zoomIn" duration={.5}>
            <ul className='social-links'>
                <li><a href='https://github.com/acarlie' target='_blank' rel='noopener noreferrer'><span className='fab fa-github social-icons'></span></a></li>
                <li><a href='https://www.linkedin.com/in/acarlie' target='_blank' rel='noopener noreferrer'><span className='fab fa-linkedin-in social-icons'></span></a></li>
                <li><a href='https://codepen.io/acarlie/' target='_blank' rel='noopener noreferrer'><span className='fab fa-codepen social-icons'></span></a></li>
            </ul>
        </ScrollAnimation>
    );
}

export default SocialLinks;
