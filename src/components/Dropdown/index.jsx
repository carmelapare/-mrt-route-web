import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

const Dropdown = ({options}) => {
    const [selectedOption, setSelectedOption] = useState(options[0]); 

    return (
        <StyledDropdown>
            <Select
                defaultValue={selectedOption}
                isSearchable={true}
                name="START"
                onChange={setSelectedOption}
                options={options}
            />
        </StyledDropdown>
    );
}

const StyledDropdown = styled.div`
    margin: 5px;
    width: 25%;
`

export default Dropdown

