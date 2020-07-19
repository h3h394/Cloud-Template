/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import FaqBg from "./FaqBg";
import FaqInfo from "./FaqInfo";

const Faq = () => {
  return (
    <section css={styles} className="faq" id="leadership">
      <Container>
        <FaqBg />
        <FaqInfo />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 260px 0 110px 0;
  background: #fafafa;
  .container {
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1000px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default Faq;
