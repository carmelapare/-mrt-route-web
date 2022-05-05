import React, {useState} from 'react'
import styled from 'styled-components'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateTimePicker = ({})=> {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <StyledPicker>
      <DatePicker
        dateFormat="MM/dd/yyyy h:mm aa"
        onChange={(date) => setStartDate(date)}
        selected={startDate}
        shouldCloseOnSelect={true}
        showTimeInput
        timeInputLabel="Time:"
      />
    </StyledPicker>
  )
}

const StyledPicker = styled.div`
  & .react-datepicker-wrapper {
    width: 100%;
  }

  & .react-datepicker__input-container {
    width: 100%;
  }

`

export default DateTimePicker