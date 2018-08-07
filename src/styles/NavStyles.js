import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const NavHeaderH2 = styled.h2`
  font-weight: normal;
  margin: 10px 0;
`
export const NavHeaderH3 = styled.h3`
  font-weight: normal;
  margin: 10px 0;
  padding: 6px;
`

export const NavHeaderGroup = styled.div`
  display: flex;
`

export const NavControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const NavBody = styled.div`

`

export const NavControlButton = styled.button`
  margin: 0;
  padding: 10px;
  display: inline-block;
  text-decoration: none;
  background: white;
  outline: none;
  font-size: 1.2em;

  border: 1px solid transparent;

  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  :hover {
    background: #ff731c;
  }
`

export const NavRow = styled.div`
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  padding-right: 6px;
  margin: 4px 0;
`