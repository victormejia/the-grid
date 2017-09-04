import React from 'react'
import styled, { keyframes } from 'styled-components'

const red = '#c0392b'
const green = '#27ae60'
const yellow = '#f1c40f'

function statusToColor(status) {
  switch (status) {
    case 'danger':
      return 'red';
    case 'safe':
      return 'green';
    case 'warning':
      return 'yellow';
    default:
      return 'green';
  }
}

const pulseAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.0;
  }
  10% {
    transform: scale(0.1);
    opacity: 0.1;
  }
  20% {
    transform: scale(0.2);
    opacity: 0.2;
  }
  30% {
    transform: scale(0.3);
    opacity: 0.3;
  }
  40% {
    transform: scale(0.4);
    opacity: 0.4;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
  }
  60% {
    transform: scale(0.6);
    opacity: 0.6;
  }
  70% {
    transform: scale(0.75);
    opacity: 0.5;
  }
  80% {
    transform: scale(0.8);
    opacity: 0.4;
  }
  90% {
    transform: scale(0.85);
    opacity: 0.2;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.0;
  }
`

const StatusPulse = styled.div`
  position: relative;
  margin: 0 auto;
  width: 10px;
  height: 10px;

  &:hover {
    cursor: pointer;
  }
`

const Pulse = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 30px;
  position: absolute;

  &.red {
    border: 5px solid ${red};
    background-color: ${red};
  }

  &.green {
    border: 5px solid ${green};
    background-color: ${green};
  }

  &.yellow {
    border: 5px solid ${yellow};
    background-color: ${yellow};
  }
`

const Dot = styled.span`
  background: transparent;
  border-radius: 60px;
  height: 30px;
  width: 30px;
  position: absolute;
  top: -10px;
  left: -10px;
  opacity: 0;
  border-width: 5px;
  border-style: solid;

  &.red {
    border-color: ${red};
    animation: ${pulseAnimation} 2s ease-out;
    animation-iteration-count: infinite;
  }

  &.green {
    border: 10px solid ${green};
  }

  &.yellow {
    border: 10px solid ${yellow};
  }
`

const Status = (props) => {
  const statusClass = statusToColor(props.status)

  return (
    <StatusPulse>
      <Pulse className={statusClass}></Pulse>
      <Dot className={statusClass}></Dot>
    </StatusPulse>
  )
}

export default Status
