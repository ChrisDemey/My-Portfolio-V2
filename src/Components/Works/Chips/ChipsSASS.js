import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    sass: {
        color: '#ff0080',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: '#ff0080'
    }
};

export default class ChipsSASS extends Component {
    render() {
        return (
            <Chip label="SASS" variant="outlined" style={Style.sass}/>
        );
    }
}