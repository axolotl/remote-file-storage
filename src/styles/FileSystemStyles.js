import styled from 'styled-components'
import React from 'react'

export const UL = styled.ul`
  list-style: none;
  padding-left: ${props => props.inner ? '20px' : '0'};
`

export const LI = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`
