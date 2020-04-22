import styled from 'styled-components';

export default styled.div`
  --banner-bg: rgba(195, 196, 219, 0.1);

  background-color: var(--banner-bg);
  /* min-width: 70%;
  min-height: 10rem; */
  position: relative;
  display: block;
  width: 100%;
  border-radius: 10px;
  margin: 0 auto;
  /* grid-column: 1 / -1; */
  /* padding: 1em 2em; */

  box-sizing: border-box;
  padding: 1em;
  margin-bottom: 2rem;

  .text {
    h1 {
      /* font-size: 1.8rem; */
      /* line-height: 1.8; */
      /* letter-spacing: 2px; */
      font-size: 1.8rem;
      margin-bottom: 1rem;

      opacity: 0.85;

      span {
        color: var(--red-color);
      }
    }

    p {
      font-size: 0.875rem;
      opacity: 0.85;
      letter-spacing: 1px;
      line-height: 1.2;
    }
  }

  .banner-img {
    display: none;
    position: absolute;
    width: 45%;
    right: 3rem;
    bottom: -0.5rem;
    opacity: 0.85;
  }
  @media only screen and (min-width: 23em) {
    .text {
      h1 {
        font-size: 2rem;
      }
    }
  }
`;
