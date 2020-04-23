import styled from 'styled-components';

export default styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
  ul {
    list-style: none;

    li {
      display: inline-block;

      @media only screen and (min-width: 42.1875em) {
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }

      a:link,
      a:visited {
        /* padding: 0.5em 1em; */
        text-decoration: none;
        color: var(--text-color);
        /* font-size: 1.25rem; */

        letter-spacing: 1px;
        padding: 1em;
        border-radius: 5px;
        transition: all 0.3s ease-in;
      }

      a:hover,
      a:active {
        background-color: var(--bg-hover-color);
      }

      a:focus {
        background-color: var(--bg-hover-color);
        color: rgba(255, 128, 139, 0.75);
        outline: none;
      }
    }
  }
`;
