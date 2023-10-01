import * as FooterStyle from "./FooterStyle";

import TrRender from "../../assets/images/Tr3Render_2.png";

const Footer = () => {
  return (
    <FooterStyle.Footer>
      <article>
        <p>Tomb Raider est une propriété de <br /><a href="https://www.crystald.com/" target="_blank" rel="noopener noreferrer">Crystal Dynamics ©</a></p>
      </article>
      <article><img src={TrRender} alt="LaraRender" /></article>
      <article>
        <p>Site développé par <a href="https://estelleroges.github.io/" target="_blank">
            Estelle ROGÈS
          </a> </p>
        <p>
          <a
            href="https://github.com/EstelleRoges/ConcoursEDW-ScrollAnimations"
            target="_blank"
          >
            Repository du projet
          </a>
        </p>
      </article>
    </FooterStyle.Footer>
  );
};

export default Footer;
