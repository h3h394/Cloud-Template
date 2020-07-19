/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const BlogCard = ({ blogImg }) => {
  return (
    <div css={styles} className="blogCard">
      <img src={blogImg} alt="blog" />
      <div className="blogCardInfo">
        <div className="blogCardDate">
          <a href="#/">May 17, 2020</a>
          <a href="#/">Admin</a>
          <a href="#/">3</a>
        </div>
        <div className="blogCardDesc">
          <a href="#/">Everything You Need to Know About Cloud Template</a>
        </div>
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 360px;
  img {
    width: 100%;
    height: 280px;
    display: block;
  }
  .blogCardInfo {
    display: flex;
    align-items: flex-start;
    padding: 30px 0;
    .blogCardDate {
      width: 100%;
      max-width: 28%;
      display: flex;
      flex-direction: column;
      text-align: right;
      margin-right: 26px;
      a {
        text-decoration: none;
        color: #b3b3b3;
        font-size: 14px;
        padding: 2px 0 0 0;
        font-weight: 700;
        transition: color 300ms ease-in-out;
        line-height: 1.8;
        &:hover {
          color: #cccccc;
        }
      }
    }
    .blogCardDesc {
      width: 100%;
      max-width: 56%;
      a {
        color: #000;
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        transition: color 300ms ease-in-out;
        line-height: 1.6;
        &:hover {
          color: #3f52e3;
        }
      }
    }
  }
  @media (max-width: 840px) {
    max-width: 490px;
  }
  @media (min-width: 841px) and (max-width: 1175px) {
    max-width: 47.5%;
  }
`;

export default BlogCard;
