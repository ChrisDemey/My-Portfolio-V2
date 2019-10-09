import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    php: {
        color: '#846BFF',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: '#846BFF'
    }
};

export default class ChipsPHP extends Component {
    render() {
        return (
            <Chip label="PHP" variant="outlined" style={Style.php}/>
        );
    }
}