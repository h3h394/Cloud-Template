/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import BlogCard from "./BlogCard";
import BlogOne from "../../img/blogOne.jpg";
import BlogTwo from "../../img/blogTwo.jpg";
import BlogThree from "../../img/blogThree.jpg";

const Blog = () => {
  return (
    <section css={styles} className="blog" id="blog">
      <div className="blogInfo">
        <Title title="Recent Blog" />
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and
          <br /> Consonantia, there live the blind texts. Separated they live in
        </p>
      </div>
      <Container>
        <BlogCard blogImg={BlogOne} />
        <BlogCard blogImg={BlogTwo} />
        <BlogCard blogImg={BlogThree} />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 110px 0;
  background: #fafafa;
  .blogInfo {
    text-align: center;
    p {
      color: #72789a;
      font-weight: 900px;
      line-height: 1.7;
      margin: 20px 0 0 0;
    }
  }
  .container {
    padding: 70px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 641px) {
    .blogInfo {
      p {
        font-size: 15px;
        padding: 0 14px;
        br {
          display: none;
        }
      }
    }
  }
  @media (max-width: 840px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 841px) and (max-width: 1175px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
`;

export default Blog;
