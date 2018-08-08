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
  padding: 3px 5px;
  display: inline-block;
  text-decoration: none;
  background: white;
  outline: none;
  font-size: 1.2em;
  cursor: pointer;
  border: 1px solid transparent;
`

export const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 6px;
  margin: 4px 0;
`

export const NavRowGroup = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const NavRowText = styled.p`
  margin: 0;
`