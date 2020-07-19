/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import LogoOne from "../../img/logoOne.png";
import LogoTwo from "../../img/logoTwo.png";
import LogoThree from "../../img/logoThree.png";
import LogoFour from "../../img/logoFour.png";
import LogoFive from "../../img/logoOne.png";

const Sponsors = () => {
  return (
    <section css={styles} className="sponsors">
      <Container>
        <img src={LogoOne} alt="microsoft" />
        <img src={LogoTwo} alt="android" />
        <img src={LogoThree} alt="java" />
        <img src={LogoFour} alt="google" />
        <img src={LogoFive} alt="adobe" />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  .container {
    display: flex;
    justify-content: space-between;
    img {
      width: 160px;
      height: auto;
      display: block;
      opacity: 0.2;
      transition: opacity 800ms ease-in-out;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  @media (max-width: 1000px) {
    .container {
      flex-direction: column;
      align-items: center;
      img {
        width: 220px;
      }
    }
  }
`;

export default Sponsors;
