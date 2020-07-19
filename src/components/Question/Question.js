/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Button from "../GlobalComponents/Button";

const Question = () => {
  return (
    <section css={styles} className="question">
      <Container>
        <div className="questionsWrapper">
          <div className="questionInfo">
            <h3>Have any question about us?</h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with
              <br /> the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
          <Button btnText="Get in touch" />
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: #fafafa;
  position: relative;
  .container {
    background: #fff;
    max-width: 940px;
    border-radius: 6px;
    margin-bottom: 40px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 60px 0px;
    display: flex;
    .questionsWrapper {
      width: 100%;
      max-width: 84%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .questionInfo {
        width: 100%;
        max-width: 640px;
        h3 {
          color: #203d67;
          font-weight: 700;
          font-size: 27px;
          line-height: 1;
        }
        p {
          color: #72789a;
          font-weight: 700;
          margin: 18px 0 0 0;
          line-height: 1.8;
        }
      }
      .btn {
        background: #ff8ba7;
        padding: 18px 30px;
        &:hover {
          background: #ff7294;
        }
      }
    }
  }
  @media (max-width: 686px) {
    .container {
      .questionsWrapper {
        .questionInfo {
          h3 {
            font-size: 24px;
          }
          p {
            font-size: 15px;
            br {
              display: none;
            }
          }
        }
      }
    }
  }
  @media (max-width: 980px) {
    .container {
      max-width: 90%;
      .questionsWrapper {
        flex-wrap: wrap;
        .questionInfo,
        .btn {
          width: 100%;
        }
        .btn {
          margin: 25px 0 0 0;
        }
      }
    }
  }
`;

export default Question;
