import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

export default function ChartBox({ children }) {
  console.log();
  return <ChartBoxStyle>{children}</ChartBoxStyle>;
}

const ChartBoxStyle = styled.div`
  background-color: var(--forgroud-color);
  padding: 1em 2em;
  border-radius: 10px;
  min-height: 20rem;
  min-width: 35.625rem;
  width: 100%;
  position: absolute;

  z-index: 10;
`;
