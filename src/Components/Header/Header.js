import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

export default class Header extends Component {
    render() {
        return (
            <article className="name" id="Home">
                <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInLeft">
                    <h1>CHRISTOPHE DEMEY</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceInRight">
                    <h3>JE SUIS ACTUELLEMENT EN STAGE À ALSTOM EN TANT QUE FRONT-END WEB DEVELOPER</h3>
                </ScrollAnimation>
                <a href="#Me">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="far fa-arrow-alt-circle-down fa-5x"></i>
                    </ScrollAnimation>
                </a>
            </article>
        );
    }
}