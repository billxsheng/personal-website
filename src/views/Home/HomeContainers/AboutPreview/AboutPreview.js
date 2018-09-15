import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './AboutPreview.css';
import Carousel from '../../../../components/Carousel/EmojiCarousel/EmojiCarousel';
import OwlCarousel from 'react-owl-carousel2';
import Link from '../../../../components/Button/Link/Link';


const aboutPreview = (props) => {
    const carouselItems = ['🐶', '👔', '🏀', '🎣', '🎸', '🔧', '🌇', '📚', '🍁','🎓', '🧠', '👨🏻‍💻', '🏋🏻‍', '🥑 ', '🏈', '⚾️', '🥅', '🎢'];
    const options = {
        items: 5,
        nav: false,
        autoplay: true,
        loop: true,
        dots: false,
        touchDrag: false,
        autoplayTimeout: 1500,
        rtl: false,
        mouseDrag: false,
        responsive: {
            705: {
                items: 5
            },
            0: {
                items: 3
            }
        }

    }
    return (
    <div styleName='aboutPreview'>
        {/* <div styleName="stripe"></div>
        <div styleName="stripe-reflected"></div> */}
            <div className="container">
                <div styleName="abt-prev-el" className="row">
                <h2>About Me</h2>
                <span styleName="about-preview-paragraph" className="container">
                    <p>Striving to be the best in everything I do.</p>            
                </span>  
                </div>
            </div>
            {/* <div styleName="carousel-overlay"></div> */}
        <OwlCarousel
        options={options}
        >   
            <Carousel carouselItems={carouselItems} classes="owl-carousel owl-theme" />
        </OwlCarousel>
        <div className="container">
                <div styleName="abt-prev-el" className="row">
                    <Link margin="25px" link="/about">About Me</Link>
                </div>
            </div>
    </div>
    )
}

export default CSSModules(aboutPreview, styles);