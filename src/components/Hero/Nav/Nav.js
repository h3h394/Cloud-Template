/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Container from "../../GlobalComponents/Container";
import Logo from "./Logo";
import Menu from "./Menu";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav css={styles}>
      <Container>
        <Logo />
        <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        <i
          id="burgerMenu"
          className={showMenu ? "fas fa-times" : "fas fa-bars"}
          onClick={() => setShowMenu(!showMenu)}
        ></i>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 40px 0;
  z-index: 5;
  #burgerMenu {
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    display: none;
  }
  @media (max-width: 1010px) {
    #burgerMenu {
      display: block;
    }
  }
`;

export default Nav;
