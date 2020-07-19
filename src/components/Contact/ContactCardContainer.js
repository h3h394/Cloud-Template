/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const ContactCardContainer = () => {
  return (
    <div css={styles} className="contactCardContainer">
      <div className="contactCard firstCard">
        <h2>Cloud Template</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className="socialContainer">
          <div className="circle">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="circle">
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className="circle">
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="contactCard secondCard">
        <h2>Useful Links</h2>
        <a href="#/">Company</a>
        <a href="#/">Pricing</a>
        <a href="#/">Leadership</a>
        <a href="#/">Blog</a>
        <a href="#/">Contact</a>
      </div>
      <div className="contactCard thirdCard">
        <h2>Navigation</h2>
        <a href="#/">Join Us</a>
        <a href="#/">Blog</a>
        <a href="#/">Privacy & Policy</a>
        <a href="#/">Terms & Condition</a>
      </div>
      <div className="contactCard forthCard">
        <h2>Office</h2>
        <div className="row">
          <i className="fas fa-map-marker-alt"></i>
          <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
        </div>
        <div className="row">
          <a href="#/">
            <i className="fas fa-phone"></i> +2 392 3929 210
          </a>
        </div>
        <div className="row">
          <a href="#/">
            <i className="fas fa-envelope"></i> info@yourdomain.com
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  .contactCard {
    width: 100%;
    max-width: 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: rgba(255, 255, 255, 0.7);
    a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-weight: 600;
      transition: color 300ms ease-in-out;
      &:hover {
        color: #fff;
      }
    }
    &:nth-child(2),
    &:nth-child(3) {
      max-width: 180px;
    }
    h2 {
      color: #fff;
      font-size: 26px;
      line-height: 1;
      margin-bottom: 40px;
    }
    &.firstCard {
      p {
        font-weight: 600;
        font-size: 15px;
        line-height: 1.9;
      }
      .socialContainer {
        display: flex;
        padding: 20px 0 0 0;
        .circle {
          margin-right: 16px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #21bf73;
          display: flex;
          i {
            color: #fff;
            margin: auto;
          }
        }
      }
    }
    &.secondCard,
    &.thirdCard {
      a {
        &:not(:last-of-type) {
          margin-bottom: 20px;
        }
      }
    }
    &.forthCard {
      .row {
        display: flex;
        align-items: flex-start;
        i {
          margin-right: 10px;
        }
        &:first-of-type {
          i {
            padding: 3px 0 0 0;
            margin-right: 17px;
          }
        }
        a {
          color: #fff;
        }
        &:not(:last-of-type) {
          margin-bottom: 20px;
        }
      }
    }
  }
  @media (max-width: 690px) {
    flex-direction: column;
    align-items: flex-start;
    .contactCard {
      max-width: 100%;
      margin: 20px 0;
    }
  }
  @media (min-width: 691px) and (max-width: 1070px) {
    flex-wrap: wrap;
    justify-content: space-between;
    .contactCard {
      max-width: 47%;
      margin: 20px 0;
      &:nth-child(2),
      &:nth-child(3) {
        max-width: 47%;
      }
    }
  }
`;

export default ContactCardContainer;
