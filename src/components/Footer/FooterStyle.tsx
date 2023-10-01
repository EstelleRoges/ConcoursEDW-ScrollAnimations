import styled from "styled-components";

export const Footer = styled.footer`
padding: 3rem 0;
background-color: var(--backgroundColor);
display: flex;
justify-content: space-around;
align-items: center;

article p {
    margin: 0.5rem;
    text-align: center;
}
article img {
    height: 15rem;
}

  @media (max-width: 578px) {
    flex-direction: column;
  }
`