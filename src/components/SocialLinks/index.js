import React from 'react';

function SocialLinks () {
    return(
        <ul className='social-links'>
            <li><a href='https://github.com/acarlie' target='_blank' rel='noopener noreferrer'><span className='fab fa-github social-icons'></span></a></li>
            <li><a href='https://www.linkedin.com/in/acarlie' target='_blank' rel='noopener noreferrer'><span className='fab fa-linkedin-in social-icons'></span></a></li>
            <li><a href='https://codepen.io/acarlie/' target='_blank' rel='noopener noreferrer'><span className='fab fa-codepen social-icons'></span></a></li>
      </ul>
    );
}

export default SocialLinks;
