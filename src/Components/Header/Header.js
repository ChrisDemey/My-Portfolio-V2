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
                    <h2>MON PORTFOLIO</h2>
                </ScrollAnimation>
            </article>
        );
    }
}