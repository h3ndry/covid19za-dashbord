import styled from 'styled-components';

export default styled.div`
  --banner-bg: rgba(195, 196, 219, 0.1);

  background-color: var(--banner-bg);
  min-width: 70%;
  min-height: 10rem;
  position: relative;
  display: inline-block;
  border-radius: 10px;
  margin: 0 auto;
  padding: 1em 2em;

  .text {
    h1 {
      font-size: 1.8rem;
      line-height: 1.8;
      letter-spacing: 2px;
      opacity: 0.85;

      span {
        color: var(--red-color);
      }
    }

    p {
      opacity: 0.85;
      letter-spacing: 1px;
      line-height: 1.2;
    }
  }

  .banner-img {
    position: absolute;
    width: 45%;
    right: 3rem;
    bottom: -0.5rem;
    opacity: 0.85;
  }
`;
