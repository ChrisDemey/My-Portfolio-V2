import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Works extends Component {
    render() {
        return (
            <article className="Works" id="myWorks">
                <a className="caseOne" href="https://chrisdemey.github.io/restaurant-css-framework/" target="_blank">
                    <ScrollAnimation animateIn="bounceInLeft">
                        <div className="imageOne"></div>
                    </ScrollAnimation>
                </a>
                <a className="caseTwo" href="https://chrisdemey.github.io/TD2-cssgrid/" target="_blank">
                    <ScrollAnimation animateIn="bounceInRight">
                        <div className="imageTwo"></div>
                    </ScrollAnimation>
                </a>
                <a className="caseThree" href="https://cleobuck.github.io/allezcinev3/" target="_blank">
                    <ScrollAnimation animateIn="bounceInLeft">
                        <div className="imageThree"></div>
                    </ScrollAnimation>
                </a>
                <a className="caseFour" href="https://chrisdemey.github.io/Hitman-site/" target="_blank">
                    <ScrollAnimation animateIn="bounceInRight">
                        <div className="imageFour"></div>
                    </ScrollAnimation>
                </a>
                <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
                    <p>Cette section sera régulièrement mise à jour</p>
                </ScrollAnimation>
            </article>
        );
    }
}