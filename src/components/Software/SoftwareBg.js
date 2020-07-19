/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import SoftwareImg from "../../img/softwareBg.svg";

const SoftwareBg = () => <img css={styles} src={SoftwareImg} alt="software" />;

const styles = css`
  width: 530px;
  height: auto;
  display: block;
  @media (max-width: 1175px) {
    display: none;
  }
`;

export default SoftwareBg;
