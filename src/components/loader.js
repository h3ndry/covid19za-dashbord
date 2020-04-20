import React from 'react';
import styled from 'styled-components';

export default function Loader() {
  return (
    <SpinnerBox>
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </SpinnerBox>
  );
}

const SpinnerBox = styled.div`
  @keyframes pulse {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0.25;
      transform: scale(0.75);
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .pulse-container {
    width: 120px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  .pulse-bubble {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: rgba(195, 196, 219, 0.75);
  }

  .pulse-bubble-1 {
    animation: pulse 0.4s ease 0s infinite alternate;
  }
  .pulse-bubble-2 {
    animation: pulse 0.4s ease 0.2s infinite alternate;
  }
  .pulse-bubble-3 {
    animation: pulse 0.4s ease 0.4s infinite alternate;
  }
`;
