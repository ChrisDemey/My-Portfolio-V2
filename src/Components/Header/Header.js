import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Header extends Component {
    render() {
        return (
            <article className="Name" id="Home">
                <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInLeft">
                    <h1>CHRISTOPHE DEMEY</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceInRight">
                    <h3>JE SUIS ACTUELLEMENT EN FORMATION AFIN DE DEVENIR WEB DEVELOPER JUNIOR</h3>
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