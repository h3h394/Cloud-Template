/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import DownloadsCard from "./DownloadsCard";

const Downloads = () => {
  return (
    <section css={styles} className="downloads">
      <Title title="We Always Try To Understand Users Expectation" />
      <Container>
        <DownloadsCard downloadsNum="12,000" downloadsTitle="Download" />
        <DownloadsCard downloadsNum="100" downloadsTitle="Awards Won" />
        <DownloadsCard downloadsNum="4,050" downloadsTitle="Contributors" />
        <DownloadsCard
          downloadsNum="9,000"
          downloadsTitle="Satisfied Customers"
        />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 100px 0;
  background: #3f52e3;
  .title {
    width: 100%;
    max-width: 700px;
    margin: 0 auto;
    color: #fff;
    line-height: 1.4;
  }
  .container {
    padding: 100px 0 0 0;
    display: flex;
    justify-content: space-evenly;
  }
  @media (max-width: 790px) {
    .title {
      font-size: 28px;
      padding: 0 14px;
    }
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

export default Downloads;
