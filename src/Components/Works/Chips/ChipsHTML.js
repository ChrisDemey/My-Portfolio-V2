import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    html: {
        color: 'orange',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: 'orange'
    }
};

export default class ChipsHTML extends Component {
    render() {
        return (
            <div className="technoIcon">
                <Chip label="HTML" variant="outlined" style={Style.html} />
            </div>
        );
    }
}