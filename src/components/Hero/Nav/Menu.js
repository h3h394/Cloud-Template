/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import Link from "./Link";
import Button from "../../GlobalComponents/Button";

const Menu = ({ showMenu, setShowMenu }) => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <div css={styles} className={(showMenu ? "hidden" : "") + " menu"}>
      <Link
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        linkName="Home"
        linkHref="#home"
        setShowMenu={setShowMenu}
      />
      <Link
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        linkName="Company"
        linkHref="#company"
        setShowMenu={setShowMenu}
      />
      <Link
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        linkName="Pricing"
        linkHref="#pricing"
        setShowMenu={setShowMenu}
      />
      <Link
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        linkName="Leadership"
        linkHref="#leadership"
        setShowMenu={setShowMenu}
      />
      <Link
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        linkName="Blog"
        linkHref="#blog"
        setShowMenu={setShowMenu}
      />
      <Link
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        linkName="Contact"
        linkHref="#contact"
        setShowMenu={setShowMenu}
      />
      <Button btnText="Get started" />
    </div>
  );
};

const styles = css`
  .btn {
    &:hover {
      background: #fff;
      color: #3f52e3;
    }
  }
  @media (max-width: 1010px) {
    width: 100%;
    max-width: 400px;
    min-height: 100vh;
    padding: 80px;
    position: absolute;
    top: 0;
    left: -700px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.9);
    opacity: 0;
    transition: all 500ms ease-in-out;
    &.hidden {
      opacity: 1;
      left: 0;
    }
    .btn {
      margin: 10px 0 0 0;
    }
  }
`;

export default Menu;
