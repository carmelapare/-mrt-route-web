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
  font-size: 16px;
  margin-top: -10px;
`
export default Text

