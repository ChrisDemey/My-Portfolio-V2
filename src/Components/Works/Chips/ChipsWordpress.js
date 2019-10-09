import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    wordpress: {
        color: 'grey',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: 'grey'
    }
};

export default class ChipsWordpress extends Component {
    render() {
        return (
            <Chip label="Wordpress" variant="outlined" style={Style.wordpress}/>
        );
    }
}