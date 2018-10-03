import styled from 'styled-components'

export const UL = styled.ul`
  list-style: none;
  padding-left: ${({ inner }) => inner ? '20px' : '0'};
`

export const LI = styled.li`
  display: flex;
  align-items: center;
  justify-content: ${({ input, head }) => {
    if (input && head) { return 'center' }
    else if (input) { return 'flex-start' }
    else { return 'space-between' }
  }};

  padding-right: 3px;
  color: ${({ inactive }) => inactive ? 'grey' : 'black'};
  margin-left: ${({ header }) => header ? '5px' : 0};
  background-color: ${({ selected }) => selected ? '#eaeaea' : ''};
  font-family: 'Questrial', sans-serif;
`

export const HorizonalRule = styled.li`
  border: .5px solid black;
  margin: 5px;
`
export const Group = styled.span`
  display: flex;
  align-items: center;
  cursor: ${({ primary }) => primary ? 'pointer' : ''}
`

export const Options = styled.span`
  margin-left: 20px;
`

export const Option = styled.button`
  font-family: 'Questrial', sans-serif;
  font-size: 14px;
  color: #c90000;
  margin-left: 5px;
  padding: 0;
  border: none;
  background: transparent;
  outline: none;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`