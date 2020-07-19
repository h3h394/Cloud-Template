/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Title = ({ title }) => (
  <h2 className="title" css={styles}>
    {title}
  </h2>
);

const styles = css`
  color: #203d67;
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
`;

export default Title;
