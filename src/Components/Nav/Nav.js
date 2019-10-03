import React, { Component } from 'react';

export default class Nav extends Component {

    homeText() {
        document.getElementById("Change").innerHTML="HOME";
    }
    whoText() {
        document.getElementById("Change").innerHTML="QUI SUIS-JE?";
    }
    workText() {
        document.getElementById("Change").innerHTML="MES TRAVAUX";
    }
    contactText() {
        document.getElementById("Change").innerHTML="ME CONTACTER";
    }
    blankText() {
        document.getElementById("Change").innerHTML=" ";
    }

    render() {
        return (
            <nav id="navBar">
                <a href="#Home" className="pulse"><i className="fas fa-home fa-2x" id="FirstIcon" 
                                    onMouseOver={() => this.homeText()} 
                                    onMouseOut={() => this.blankText()}></i></a>
                <a href="#Me"><i className="fas fa-user-check fa-2x" id="SecondIcon" 
                                    onMouseOver={() => this.whoText()} 
                                    onMouseOut={() => this.blankText()}></i></a>
                <a href="#myWorks"><i className="fas fa-laptop-code fa-2x" id="ThirdIcon" 
                                    onMouseOver={() => this.workText()} 
                                    onMouseOut={() => this.blankText()}></i></a>
                <a href="#mySocial"><i className="fas fa-handshake fa-2x" id="FourthIcon" 
                                    onMouseOver={() => this.contactText()} 
                                    onMouseOut={() => this.blankText()}></i></a>
                <article>
                    {/* eslint-disable-next-line */}
                    <h3 className="changingText" id="Change"></h3>
                </article>
            </nav>
        );
    }
}