import React from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import DateTimePicker from '../../components/DateTimePicker'
import Dropdown from '../../components/Dropdown'
import Text from '../../components/Text'

const SearchRoute = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    let result = {
        steps: 9,
        routes: ['CC21', 'CC20', 'CC19', 'DT9', 'DT10', 'DT11', 'DT12', 'DT13', 'DT14'],
        instructions : [
            'Take CC line from Holland Village to Farrer Road',
            'Take CC line from Farrer Road to Botanic Gardens',
            'Change from CC line to DT line',
            'Take DT line from Botanic Gardens to Stevens',
            'Take DT line from Stevens to Newton',
            'Take DT line from Newton to Little India',
            'Take DT line from Little India to Rochor',
            'Take DT line from Rochor to Bugis'
        ]
    }

    return (
            <StyledPage>
                <h1>MRT ROUTES</h1>
                <h3>Find the shortest route</h3> 
                <RouteSection>
                    <Dropdown options={options}></Dropdown>
                    <Dropdown options={options}></Dropdown>
                    <Button text={"Search"}/>
                </RouteSection>
                <RouteSection>
                    <DateTimePicker/>
                </RouteSection>
                <ResultSection>
                    <ResultRow>
                        <Text subtext text={'STEPS: '}/> 
                        <Text text={result.steps}/> 
                    </ResultRow> 
                    <ResultRow>
                        <Text subtext text={'ROUTES: '}/> 
                        <Text text={result ? result.routes.join(',') : 'None'} />
                    </ResultRow> 
                    <ResultRow>
                        <Text subtext text={'INSTRUCTIONS: '}/> 
                        {result.instructions.map((item,i) => 
                            <Text text={item}/>  
                        )}
                    </ResultRow>
                </ResultSection>
            </StyledPage>
       
    )
}

const StyledPage = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const RouteSection = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    width: 100%;
`
const ResultSection = styled.div`
    font-size: 18px;
    width: 55%;
`
const ResultRow = styled.div`
    padding-bottom: 10px;
`

export default SearchRoute
