import styled from 'styled-components'

const Button = ({text, ...props}) => {
  return (
    <BaseButton {...props}>{text}</BaseButton>
  )
}

const BaseButton = styled.button`
  align-items: center;
  background-color: #0276FF;
  border-radius: 7px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 70%;
  height: 40px;
  margin-left: 2px;
  margin-top: 5px;
  padding: 0px 15px;
  text-align: center;
  text-transform: none;
  
  &:active {
    background-color: #006AE8;
  }
  &:hover {
    background-color: #1C84FF;
  }
`

export default Button