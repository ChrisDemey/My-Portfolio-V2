import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    api: {
        color: 'blue',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: 'blue'
    }
};

export default class ChipsAPI extends Component {
    render() {
        return (
            <Chip label="API" variant="outlined" style={Style.api}/>
        );
    }
}