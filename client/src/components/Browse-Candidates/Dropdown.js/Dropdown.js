import React from 'react';
import "./Dropdown.css"

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const renderedOptions = options.map((option) => {

        if (option.value === selected.value) {
            return null;
        }

        return(
            <div 
                key={option.value}
                onClick = {() => onSelectedChange(option)}
                >
                {option.label}
            </div>
        )
    })


    return (
            <div class="dropdown show">
                <div class="btn browse-candidates-dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {selected.value}
                </div>

                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {renderedOptions}
                </div>
            </div>
    );
}

export default Dropdown;