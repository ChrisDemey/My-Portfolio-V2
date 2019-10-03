import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    javascript: {
        color: 'yellow',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: 'yellow'
    }
};

export default class ChipsJavascript extends Component {
    render() {
        return (
            <Chip label="Javascript" variant="outlined" style={Style.javascript}/>
        );
    }
}