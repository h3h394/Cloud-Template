/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FaqHeading = ({ type, hidden, setHidden }) => {
  return (
    <div
      css={styles}
      style={{
        background: hidden === type ? "#3f52e3" : "#fff",
        color: hidden === type ? "#fff" : "#000",
      }}
      className="faqHeading"
      onClick={() => {
        hidden === type ? setHidden(!hidden) : setHidden(type);
      }}
    >
      <p>{type}</p>
      <i
        style={{ color: hidden === type ? "#fff" : "rgba(0, 0, 0, 0.3)" }}
        className={hidden === type ? "fas fa-caret-down" : "fas fa-caret-up"}
      ></i>
    </div>
  );
};

const styles = css`
  width: 100%;
  border-radius: 50px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin: 14px 0;
  p {
    font-weight: 700;
  }
`;

export default FaqHeading;
