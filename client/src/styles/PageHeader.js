import styled from 'styled-components'
import { CenterContent, ContainToWidth } from './Containers'

export const CenterHeaderWithStyles = styled(CenterContent)`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset;
`

export const ContainToWidthWithStyles = styled(ContainToWidth)`
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`
