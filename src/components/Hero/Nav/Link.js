/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Link = ({
  linkName,
  linkHref,
  activeLink,
  setActiveLink,
  setShowMenu,
}) => {
  return (
    <a
      className={activeLink === linkName && "active"}
      onClick={() => {
        setShowMenu(false);
        setActiveLink(linkName);
      }}
      css={styles}
      href={linkHref}
    >
      {linkName}
    </a>
  );
};

const styles = css`
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 24px;
  transition: color 500ms ease-in-out;
  &.active,
  &:hover {
    color: #fff;
  }
  @media (max-width: 1010px) {
    margin: 0;
    font-size: 27px;
  }
`;

export default Link;
