import React, { Component } from 'react';
import '../../scss/Works.scss';
import ScrollAnimation from 'react-animate-on-scroll';

import ChipsHTML from './Chips/ChipsHTML';
import ChipsSASS from './Chips/ChipsSASS';
import ChipsBootstrap from './Chips/ChipsBootstrap';
import ChipsJavascript from './Chips/ChipsJavascript';
import ChipsAPI from './Chips/ChipsAPI';

const Style = {
    github: {
        color: 'white',
        marginRight: 20
    },
    internet: {
        color: 'white',
        marginLeft: 20
    }
}

export default class Works extends Component {
    render() {
        return (
            <article className="works" id="myWorks">

                <ScrollAnimation animateIn="bounceInLeft">
                    <div className="caseOne">
                        <div className="icons">
                        <ChipsHTML/>
                        <ChipsSASS/>
                        <ChipsBootstrap/>
                        </div>
                        <div className="socials">
                            <a 
                                href="https://github.com/ChrisDemey/restaurant-css-framework" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-code fa-5x" style={Style.github}></i>
                            </a>
                            <a 
                                href="https://chrisdemey.github.io/restaurant-css-framework/" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-globe fa-5x" style={Style.internet}></i>
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInRight">
                    <div className="caseTwo">
                        <div className="icons">
                            <ChipsHTML/>
                            <ChipsSASS/>
                            <ChipsJavascript/>
                        </div>
                        <div className="socials">
                            <a 
                                href="https://github.com/ChrisDemey/TD2-cssgrid" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-code fa-5x" style={Style.github}></i>
                            </a>
                            <a 
                                href="https://chrisdemey.github.io/TD2-cssgrid/" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-globe fa-5x" style={Style.internet}></i>
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInLeft">
                    <div className="caseThree">
                        <div className="icons">
                            <ChipsHTML/>
                            <ChipsSASS/>
                            <ChipsBootstrap/>
                            <ChipsJavascript/>
                            <ChipsAPI/>
                        </div>
                        <div className="socials">
                            <a 
                                href="https://github.com/ChrisDemey/allezcinev3" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-code fa-5x" style={Style.github}></i>
                            </a>
                            <a 
                                href="https://cleobuck.github.io/allezcinev3/" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-globe fa-5x" style={Style.internet}></i>
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="bounceInRight">
                    <div className="caseFour">
                        <div className="icons">
                            <ChipsHTML/>
                            <ChipsSASS/>
                            <ChipsBootstrap/>
                            <ChipsJavascript/>
                            <ChipsAPI/>
                        </div>
                        <div className="socials">
                            <a 
                                href="https://github.com/ChrisDemey/Hitman2-website" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-code fa-5x" style={Style.github}></i>
                            </a>
                            <a 
                                href="https://chrisdemey.github.io/Hitman2-website/" 
                                target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-globe fa-5x" style={Style.internet}></i>
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
                    <p>Cette section sera régulièrement mise à jour</p>
                </ScrollAnimation>
            </article>
        );
    }
}