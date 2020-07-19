/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Button from "../GlobalComponents/Button";
import Overlay from "../GlobalComponents/Overlay";

const PricingCard = ({
  cardPlan,
  cardPrice,
  cardFeatures,
  cardBandwidth,
  cardStorage,
  cardOverage,
}) => {
  return (
    <div css={styles} className="pricingCard">
      <Overlay />
      <span className="cardPlan planWhite">{cardPlan}</span>
      <h2 className="whiteText">
        <sup>$</sup>
        {cardPrice}
        <span className="spanWhite"> /mo</span>
      </h2>
      <span className="cardFeatures planWhite">{cardFeatures}</span>
      <div className="features">
        <p className="allFeatures whiteText">ENJOY ALL THE FEATURES</p>
        <p className="whiteText">
          {cardBandwidth}
          <span> Bandwidth</span>
        </p>
        <p className="whiteText">
          {cardStorage}
          <span> Storage</span>
        </p>
        <p className="whiteText">
          {cardOverage}
          <span> Overages</span>
        </p>
        <p>All features</p>
      </div>
      <Button btnText="Choose Plan" />
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 262px;
  padding: 30px;
  text-align: center;
  background: #fff;
  color: #72789a;
  position: relative;
  cursor: pointer;
  &:hover {
    .planWhite {
      color: rgba(255, 255, 255, 0.8);
    }
    .features .allFeatures,
    .whiteText {
      color: #fff;
      span {
        color: #72789a;
      }
      .spanWhite {
        color: #fff;
      }
    }
    .overlay {
      top: 0;
      opacity: 1;
    }
  }
  .overlay {
    top: 14px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }
  span {
    font-weight: 600;
    font-size: 14px;
  }
  .cardPlan {
    font-weight: 800;
    font-size: 16px;
    line-height: 1;
  }
  .cardFeatures {
    padding: 22px 0 0 0;
    display: block;
    position: relative;
  }
  h2 {
    color: #203d67;
    font-size: 56px;
    font-weight: 800;
    line-height: 1;
    margin: 34px 0 0 0;
    position: relative;
    sup {
      font-size: 20px;
      margin-right: 4px;
    }
    span {
      font-size: 13px;
      color: #72789a;
      font-weight: 600;
    }
  }
  .features {
    position: relative;
    p {
      &:last-of-type {
        color: #72789a;
        font-weight: 600;
      }
    }
    .allFeatures {
      color: #203d67;
      font-size: 14px;
      font-weight: 700;
    }
    p {
      color: #203d67;
      font-weight: 800;
      padding: 17px 0 0 0;
    }
  }
  .btn {
    position: relative;
    background: #ff8ba7;
    margin: 25px 0;
    width: 100%;
    padding: 20px 0;
    &:hover {
      background: #ff7294;
    }
  }
  @media (max-width: 660px) {
    max-width: 100%;
    margin: 18px 0;
  }
  @media (min-width: 661px) and (max-width: 1175px) {
    max-width: 47.8%;
    margin: 18px 0;
  }
`;

export default PricingCard;
