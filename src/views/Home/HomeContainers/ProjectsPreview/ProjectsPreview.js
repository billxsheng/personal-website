import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import Link from '../../../../components/Button/Link/Link';
import SlideCarousel from '../../../../components/Carousel/SlideCarousel/SlideCarousel';
import CarouselItem from '../../../../components/Carousel/SlideCarousel/CarouselItem/CarouselItem';
import projectsInfo from '../../../../assets/projectsInfo';

class projectsPreview extends Component {

    render() {
        return (
            <div styleName= 'projectsPreview'>
            <span className="container">
                    <h2>Projects</h2>
            </span>
            <span styleName="projects-preview-paragraph" className="container">
                    <p>I'm always up for a challenge <span aria-label="emoji" role="img">💡</span></p>            
            </span> 
            <div styleName="carousel-relative">
                <SlideCarousel>
                    <CarouselItem title={projectsInfo.CTC.name} tag="Internship" type="coop1" to="/projects/canadian-tire"/>
                    <CarouselItem title={projectsInfo.Blitz.name} tag="Side Project" type="blitz" to="/projects/blitz"/>
                    <CarouselItem title={projectsInfo.Ryse.name} tag="Hackathon" type="ryse" to="/projects/ryse"/>
                </SlideCarousel>
            </div>
                <div styleName="link-container" className="row">
                    <Link margin="25px" link="/projects">View All Projects</Link>
                </div>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);