import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    bootstrap: {
        color: '#9100ca',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: '#9100ca'
    }
};

export default class ChipsBootstrap extends Component {
    render() {
        return (
            <Chip label="Bootstrap" variant="outlined" style={Style.bootstrap}/>
        );
    }
}