import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const Dropdown = ({options, ...props}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]); 

    return (
        <StyledDropdown>
            <Select
                defaultValue={selectedOption}
                isSearchable={true}
                onChange={setSelectedOption}
                options={options}
                {...props}
            />
        </StyledDropdown>
    );
}

const StyledDropdown = styled.div`
    margin: 5px;
    width: 25%;
`

export default Dropdown

