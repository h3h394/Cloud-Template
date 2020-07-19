/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const DownloadsCard = ({ downloadsNum, downloadsTitle }) => {
  return (
    <div css={styles} className="downloadsCard">
      <h3>{downloadsNum}</h3>
      <p>{downloadsTitle}</p>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 160px;
  text-align: center;
  h3 {
    color: #fff;
    font-size: 40px;
    line-height: 1;
  }
  p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    font-weight: 700;
    margin: 18px 0 0 0;
  }
  @media (max-width: 790px) {
    max-width: 47%;
    margin: 14px 0;
  }
`;

export default DownloadsCard;
