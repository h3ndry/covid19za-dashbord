import styled from 'styled-components';

export default styled.div`
  background-color: var(--forgroud-color);
  padding: 1em 2em;
  border-radius: 10px;
  position: relative;
  min-height: 14rem;

  .container {
    h2 {
      font-size: 1.25rem;
      font-weight: 400;
      opacity: 0.85;
    }

    .text {
      display: flex;
      padding: 1em 0;
      align-items: center;
      p {
        padding-left: 1em;
        font-size: 0.875rem;
        opacity: 0.85;
        line-height: 1.3;
        .number {
          font-size: 2rem;
          letter-spacing: 2px;
        }
        .diff {
          font-size: 1.125rem;
        }
      }
    }
  }

  hr {
    opacity: 0.2;
    margin-bottom: 0.5em;
  }
`;
