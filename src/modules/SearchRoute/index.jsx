import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Components
import Button from '../../components/Button'
import DateTimePicker from '../../components/DateTimePicker'
import Dropdown from '../../components/Dropdown'
import Text from '../../components/Text'

// Services
import { getStationsLookup } from '../../services/lookup'
import { getShortestPath } from '../../services/route'

const SearchRoute = () => {

    const [ destination, setDestination ] = useState(null)
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const [ lookups, setLookups ] = useState([])
    const [ routes, setRoutes ] = useState([])
    const [ source, setSource ] = useState(null)

   // Get stations lookup from service
    useEffect(() => {
      const fetchData = async () => {
        const result = await(getStationsLookup());
        setLookups(result);
      };
      fetchData();
    }, []);

    // Get shortest path from service
    const handleSubmit = async (e) => {
        setIsSubmitting(true)
        // const result = await(getShortestPath(source, destination));
        // setRoutes(result);
    }

    const options = lookups.map(item => ({
        value: item.Code,
        label: item.Name + ' - ' + item.Code
    }))

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
                <Dropdown 
                    onChange={(e) => {setSource(e.value)}} 
                    options={options.filter(o => o.value !== destination)}>
                </Dropdown>
                <Dropdown 
                    onChange={(e) => {setDestination(e.value)}} 
                    options={options.filter(o => o.value !== source)}>
                </Dropdown>
                <Button isSubmitting={isSubmitting} onClick={handleSubmit} text={"Search"}/>
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
                        <Text key={i} text={item}/>  
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
