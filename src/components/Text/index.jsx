import React  from 'react'
import styled from 'styled-components'

const Text = ({text, subtext}) => {
  return (
      <StyledText>
        {subtext ? 
          (<h5>{text}</h5>) : (<p>{text}</p>)
        }
      </StyledText> 
  )
}

const StyledText = styled.div`
  font-size: 18px;
  margin-top: -20px;
`
export default Text

