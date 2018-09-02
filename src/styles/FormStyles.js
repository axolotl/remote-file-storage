import styled from 'styled-components'

export const InputField = styled.input`
  margin: 0 5px;
  width: 150px;
  padding: 0 2px;
  border: 1px solid ${props => props.error ? '#c90000' : '#848484'};

  ::placeholder {
    color: ${props => props.error ? '#c90000' : '#848484'};
  }
`

export const InputButton = styled.input`
  border: transparent;
  background: transparent;
  color: #c90000;
  font-size: 14px;
  font-family: 'Questrial', sans-serif;
  padding: 0;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`