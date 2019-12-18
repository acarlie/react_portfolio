import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

function PortfolioItem (props) {
    return(
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' offset={100} duration={.5}>
            <figure className="grid-item">
                <img className="grid-item-img" src={process.env.PUBLIC_URL + 'assets/images/sm/' + props.img} alt={props.desc} />
                <div className="grid-item-info">
                    <div className="grid-item-info-wrap">
                        <h4 className="grid-item-title">{props.title}</h4>
                        <figcaption className="grid-item-cap">{props.desc}</figcaption>
                        <ul className="grid-item-view">
                            {props.url && <li><a href={props.url} target="_blank" rel="noopener noreferrer" className="grid-item-link">View Deployed Project ⟶</a></li>}
                            {props.repo && <li><a href={props.repo} target="_blank" rel="noopener noreferrer" className="grid-item-link">View the Repo ⟶</a></li>}
                        </ul>
                    </div>
                </div>
            </figure>
        </ScrollAnimation>
    )
}

export default PortfolioItem;