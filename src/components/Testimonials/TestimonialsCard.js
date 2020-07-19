/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const TestimonialsCard = ({ cardTitle, cardImg }) => {
  return (
    <div css={styles} className="testimonialsCard">
      <div
        style={{ background: `url(${cardImg}) no-repeat center/cover` }}
        className="userImg"
      >
        <div className="circle"></div>
      </div>
      <div className="cardDesc">
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and
          <br /> Consonantia, there live the blind texts.
        </p>
        <div className="cardInfo">
          <h3>Mark Web</h3>
          <span>{cardTitle}</span>
        </div>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  cursor: pointer;
  .userImg {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    margin-right: 50px;
    position: relative;
    .circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #21bf73;
      position: absolute;
      bottom: 0px;
      right: 0;
    }
  }
  .cardDesc {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #72789a;
    font-weight: 700;
    font-size: 16px;
    .cardInfo {
      h3 {
        color: #203d67;
        font-weight: 800;
        font-size: 22px;
      }
    }
  }
  @media (max-width: 890px) {
    .userImg {
      width: 150px;
      height: 140px;
      min-height: 140px;
      border-radius: 4px;
      margin-right: 20px;
    }
    .cardDesc {
      width: 100%;
      max-width: 58%;
      padding: 0 0 10px 0;
      p {
        font-size: 15px;
        font-weight: 500;
        margin: 3px 0;
        br {
          display: none;
        }
      }
    }
  }
`;

export default TestimonialsCard;
