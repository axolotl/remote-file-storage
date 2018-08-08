import styled from 'styled-components'

export const OuterContainer = styled.div`
  background-color: #ff731c;
  display: flex;
  justify-content: center;

  position: relative;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
`

export const InnerContainer = styled.div`
  width: 700px;
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-weight: normal;
`
