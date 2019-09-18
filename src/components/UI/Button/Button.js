import React from 'react';

import './Button.scss';

const button = props => (
    <button type={props.type} 
            className={props.className}
            data-toggle={props.data_toggle} 
            data-target={props.data_target}
            onClick={props.clicked}
            >
            {props.children}
    </button>
);

export default button;
