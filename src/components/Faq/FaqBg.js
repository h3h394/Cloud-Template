/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import FaqImg from "../../img/faqImg.jpg";

const FaqBg = () => <div className="faqImg" css={styles}></div>;

const styles = css`
  width: 100%;
  max-width: 540px;
  background: url('${FaqImg}') no-repeat center/cover;
  height: 700px;
  display: block;
  border-radius: 4px;
  box-shadow: 17px 25px 56px -22px rgba(0, 0, 0, 0.38);
  @media (max-width: 980px){
    margin: 40px 0;
  }
  @media (min-width: 1001px) and (max-width: 1175px){
    max-width: 40%;
    height: 400px;
  }
`;

export default FaqBg;
