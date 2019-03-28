import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px 15px;
  margin: 5px;
  font-family: 'Questrial', sans-serif;
  font-size: 1.8rem;
  cursor: pointer;

  color: black;
  background: white;
  border: 1px solid #848484;
  box-shadow: inset 0 0 0 1px transparent;
  border-radius: 2px;

  transition: all 0.3s ease;

  &:hover {
    background: #d1f3fa;
    color: black;
    box-shadow: inset 0 0 0 1px #d1f3fa;
  }
`

export const DemoButton = styled.button`
  background: #1485cc;
  color: white;
  border: 1px solid transparent;
  box-shadow: inset 0 0 0 3px transparent;
  border-radius: 5px;

  position: absolute;
  z-index: 10;

  transition: all 0.3s ease;

  &:hover {
    color: #1485cc;
    background: white;
    box-shadow: inset 0 0 0 3px #1485cc;
  }
`
