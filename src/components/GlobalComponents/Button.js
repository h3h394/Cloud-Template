/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Button = ({ btnText }) => (
  <button className="btn" css={styles}>
    {btnText}
  </button>
);

const styles = css`
  border: none;
  outline: none;
  padding: 14px 34px;
  color: #fff;
  font-weight: 800;
  background: #21bf73;
  border-radius: 6px;
  cursor: pointer;
  transition: all 500ms ease-in-out;
`;

export default Button;
