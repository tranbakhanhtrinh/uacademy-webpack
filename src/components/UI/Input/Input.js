import React from 'react';

import './Input.scss';

const input = props => {
    let inputElement = null;
    
    switch (props.elementType){
        case ('input'):
            inputElement = <input 
                className="field_input"
                {...props.elementConfig}
                value = {props.value} 
                onChange={props.changed}
                />
            break;
        
        case ('select'): 
            inputElement = (
                <select 
                    className="field_input"
                    value = {props.value}
                    onChange={props.changed}
                    >
                        {props.options.map(option => (
                            <option key={option.value} value={option.value}>{option.displayValue}</option>
                        ))}
                </select>
            )
            break;
        case ('textarea'):
            inputElement = <textarea
                className = "field_input"
                {...props.elementConfig}
                onChange={props.changed}
                >
            </textarea>
            break;
        default:
            inputElement = <input 
                className="field_input"
                {...props.elementConfig}
                value = {props.value} 
                onChange={props.changed}
                />
    }
    return(
        <div>
            {inputElement}
        </div>
    )
}

export default input;