/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";

const HeroInfo = () => {
  return (
    <div css={styles} className="heroInfo">
      <span>CLOUD TEMPLATE</span>
      <h2>
        Cloud, <br />
        Management,
        <br />
        Template
      </h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <Button btnText="Get in touch" />
    </div>
  );
};

const styles = css`
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  width: 100%;
  max-width: 400px;
  span,
  p {
    font-weight: 700;
  }
  h2 {
    color: #fff;
    font-size: 58px;
    line-height: 1.2;
    font-weight: 900;
  }
  p {
    margin: 14px 0;
    line-height: 1.8;
  }
  .btn {
    padding: 19px 36px;
    &:hover {
      background: #1da966;
    }
  }
`;

export default HeroInfo;
