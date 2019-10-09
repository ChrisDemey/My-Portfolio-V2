import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';

const Style = {
    react: {
        color: '#6BD4FF',
        fontWeight: 'bolder',
        borderWidth: 2,
        borderColor: '#6BD4FF'
    }
};

export default class ChipsReact extends Component {
    render() {
        return (
            <Chip label="React" variant="outlined" style={Style.react}/>
        );
    }
}