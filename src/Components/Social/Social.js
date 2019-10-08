import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Social extends Component {
    render() {
        return (
            <article className="contact" id="mySocial">
                <a href="https://www.facebook.com/christophe.demey.7" target="_blank" rel="noopener noreferrer">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="fab fa-facebook-square fa-4x"></i>
                    </ScrollAnimation>
                </a>
                <a href="https://www.linkedin.com/in/christophe-demey/" target="_blank" rel="noopener noreferrer">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="fab fa-linkedin fa-4x"></i>
                    </ScrollAnimation>
                </a>
                <a href="https://github.com/ChrisDemey" target="_blank" rel="noopener noreferrer">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="fab fa-github-square fa-4x"></i>
                    </ScrollAnimation>
                </a>
                <a href="https://codepen.io/chrisdemey" target="_blank" rel="noopener noreferrer">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="fab fa-codepen fa-4x"></i>
                    </ScrollAnimation>
                </a>
                <a href="https://twitter.com/DemeyChristophe" target="_blank" rel="noopener noreferrer">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="fab fa-twitter-square fa-4x"></i>
                    </ScrollAnimation>
                </a>
                <a href="mailto:demey.christophe.dc@gmail.com" target="_blank" rel="noopener noreferrer">
                    <ScrollAnimation animateIn="flipInY" animateOut="flipOutX">
                        <i className="fas fa-envelope-square fa-4x"></i>
                    </ScrollAnimation>
                </a>
            </article>
        );
    }
}