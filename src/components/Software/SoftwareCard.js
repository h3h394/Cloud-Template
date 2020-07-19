/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Overlay from "../GlobalComponents/Overlay";

const SoftwareCard = ({ softwareIcon, softwareTitle }) => {
  return (
    <div css={styles} className="softwareCard">
      <Overlay />
      <i className={softwareIcon}></i>
      <div className="softwareInfo">
        <h3>{softwareTitle}</h3>
        <p>
          Even the all-powerful Pointing has no control about
          <br /> the blind texts
        </p>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 560px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  position: relative;
  &:hover {
    .overlay {
      top: 0;
      opacity: 1;
    }
    i {
      color: #fff;
    }
    .softwareInfo {
      h3 {
        color: #fff;
      }
      p {
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
  .overlay {
    background: #21bf73;
    top: 14px;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }
  i {
    color: #ff8ba7;
    font-size: 38px;
    margin-right: 30px;
    transition: all 400ms ease-in-out;
    position: relative;
  }
  .softwareInfo {
    position: relative;
    h3 {
      color: #203d67;
      transition: all 400ms ease-in-out;
    }
    p {
      transition: all 400ms ease-in-out;

      color: #72789a;
      font-weight: 700;
      line-height: 1.6;
      margin: 12px 0 0 0;
    }
  }
  @media (max-width: 615px) {
    .softwareInfo {
      p {
        br {
          display: none;
        }
      }
    }
  }
  @media (min-width: 841px) and (max-width: 1175px) {
    max-width: 47%;
  }
`;

export default SoftwareCard;
