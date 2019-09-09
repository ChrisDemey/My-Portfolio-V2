import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Describe extends Component {
    render() {
        return (
            <article className="Describe" id="Me">
                <ScrollAnimation animateIn="flipInY" animate="flipOutY">
                    <p>Bonjour, je m'appelle Christophe. Infographiste de par ma scolarité (et première passion), je me suis lancé dans une formation en développement Web depuis peu. Et je compte bien percer dans ce domaine!</p>
                </ScrollAnimation>
            </article>
        );
    }
}