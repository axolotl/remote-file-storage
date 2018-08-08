import React from 'react';
import Icon from '../styles/Icon'

const File = ({ onClick }) => (
  <Icon onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
      <title>Upload new file</title>
      <path fill="#000000" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z" />
    </svg>
  </Icon>
);

export default File;