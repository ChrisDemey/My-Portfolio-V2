import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Describe extends Component {
    render() {
        return (
            <article className="describe" id="Me">
                <ScrollAnimation animateIn="flipInY">
                    <p className="firstText">Je m'appelle Christophe, j'ai 29 ans et je suis en fin de formation afin de devenir Junior Web Developer. Infographiste de par ma scolarité (et première passion), je me suis lancé dans une formation Web Developer depuis Avril 2019.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInX">
                    <p className="secondText">Durant cette formation de 7 mois chez BeCode, j'ai appris plusieurs langages de programmation. Et à mesure de mon apprentissage, je me suis naturellement dirigé vers le Front-End, bien que mon but premier est d'apprendre le plus de langages afin tracer ma voie dans le Web Development.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="flipInY">
                    <p className="thirdText">Je suis actuellement en plein approfondissement avec React (et par la suite React Native), ce qui fera de mon portfolio, en plus de sa fonction première, un portail qui montrera ma maîtrise dans ce framework.</p>
                </ScrollAnimation>
            </article>
        );
    }
}