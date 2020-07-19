/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Logo = () => <h2 css={styles}>Cloud Template</h2>;

const styles = css`
  font-size: 20px;
  line-height: 1;
  font-weight: 900;
  color: #fff;
  cursor: pointer;
`;

export default Logo;
