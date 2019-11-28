import React from 'react';
import Select from 'react-select';

import './Select.scss';

const options= [
    { value: 'Digital Performance Marketing', label: 'Digital Performance Marketing' },
    { value: 'Intermediate Level', label: 'Intermediate Level' },
    { value: 'Advance Level', label: 'Advance Level' }
]

const select = props => (
    <Select className="field_input" classNamePrefix="field_input" placeholder={props.placeholder} options={options} onChange={props.changed} />
)
export default select;