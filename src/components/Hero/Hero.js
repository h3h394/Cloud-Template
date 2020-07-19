/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overlay from "../GlobalComponents/Overlay";
import Container from "../GlobalComponents/Container";
import Nav from "./Nav/Nav";
import HeroBg from "./HeroBg";
import HeroInfo from "./HeroInfo";

const Hero = () => {
  return (
    <section css={styles} className="hero" id="home">
      <Overlay />
      <Nav />
      <Container>
        <HeroBg />
        <HeroInfo />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  position: relative;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:nth-child(3) {
      justify-content: flex-end;
    }
  }
  @media (max-width: 1175px) {
    .container {
      &:nth-child(3) {
        justify-content: flex-start;
      }
    }
  }
`;

export default Hero;
