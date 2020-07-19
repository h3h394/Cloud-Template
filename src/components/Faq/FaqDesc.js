/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FaqDesc = () => {
  return (
    <div css={styles} className="faqDesc">
      <h2>
        Frequently Asks
        <br /> Questions
      </h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
    </div>
  );
};

const styles = css`
  h2 {
    color: #203d67;
    font-size: 44px;
    font-weight: 800;
    line-height: 1.2;
  }
  p {
    margin: 34px 0;
    color: #72789a;
    font-weight: 700;
    line-height: 1.7;
  }
`;

export default FaqDesc;
