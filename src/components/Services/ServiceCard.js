/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overlay from "../GlobalComponents/Overlay";

const ServiceCard = ({ serviceIcon, serviceTitle }) => {
  return (
    <div css={styles} className="serviceCard">
      <Overlay />
      <div className="iconContainer">
        <i className={serviceIcon}></i>
      </div>
      <div className="serviceInfo">
        <h3>{serviceTitle}</h3>
        <p>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 360px;
  margin: 20px 0;
  background: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  &:hover {
    .overlay {
      opacity: 1;
      top: 0;
    }
    .serviceInfo {
      position: relative;
      h3 {
        color: #fff;
        transition: all 600ms ease-in-out;
      }
      p {
        color: rgba(255, 255, 255, 0.8);
        transition: all 600ms ease-in-out;
      }
    }
    .iconContainer {
      background: #fff;
      position: relative;
      transition: all 600ms ease-in-out;
      i {
        color: #21bf73;
        transition: all 600ms ease-in-out;
      }
    }
  }
  .overlay {
    background: #21bf73;
    top: 20px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 600ms ease-in-out;
  }
  .iconContainer {
    background: #21bf73;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    display: flex;
    i {
      margin: auto;
      color: #fff;
      font-size: 36px;
    }
  }
  .serviceInfo {
    padding: 10px 0;
    width: 100%;
    max-width: 180px;
    h3 {
      line-height: 1;
      font-weight: 800;
      color: #203d67;
    }
    p {
      margin: 16px 0;
      color: #72789a;
      font-weight: 700;
      line-height: 1.7;
    }
  }
  @media (max-width: 868px) {
    max-width: 450px;
    .serviceInfo {
      max-width: 70%;
    }
  }
`;

export default ServiceCard;
