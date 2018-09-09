import React from 'react';
import './ERCStyle.css'

import { Button } from 'mdbreact';

export const CustomButton = props => {
    const boop = props;
    return (
    <Button color = "brown" className ="lighten-1">Trying not to blow up</Button>
    )
}

export default CustomButton;