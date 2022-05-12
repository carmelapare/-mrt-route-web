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
    const [ schedule, setSchedule ] = useState(new Date())

   // Get stations lookup from service
    useEffect(() => {
      const fetchData = async () => {
        const result = await(getStationsLookup());
        setLookups(result);
      };
      fetchData();
    }, []);

    // Get shortest path from service
    const handleSubmit = async () => {
        const result = await(getShortestPath(source, destination, schedule.toISOString("YYYY-MM-DDTHH:mm")))
        if (result) {
            setRoutes(result)
        }
        setIsSubmitting(true)
    }

    const options = lookups.map(item => ({
        value: item.code,
        label: `${item.name}(${item.code})`
    }))

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
                <DateTimePicker onChange={(e) => setSchedule(e.value)} />
            </RouteSection>
            <ResultSection>
                {routes.steps &&<ResultRow>
                    <Text subtext text={'STEPS: '}/> 
                    <Text text={routes.steps} />
                </ResultRow> }
                {routes.travelTime && <ResultRow>
                    <Text subtext text={'TRAVEL TIME: '}/> 
                    <Text text={`${routes.travelTime} minutes`} />
                </ResultRow> }
                {routes.route && 
                <ResultRow>
                    <Text subtext text={'ROUTES:  '}/> 
                    <Text text={routes ? routes.route.join('-> ') : 'None'} />
                </ResultRow> }
                {routes.instructions && <ResultRow>
                    <Text subtext text={'INSTRUCTIONS: '}/> 
                    {routes.instructions.map((item,i) => 
                        <Text key={i} text={item}/>  
                    )}
                </ResultRow> }
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
    margin-bottom: 10px;
    width: 100%;
`
const ResultSection = styled.div`
    font-size: 18px;
    width: 55%;
`
const ResultRow = styled.div`
    padding-bottom: 2px;
`

export default SearchRoute
