/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import Title from "../GlobalComponents/Title";
import Carousel from "react-elastic-carousel";
import TestimonialsCard from "./TestimonialsCard";
import PersonOne from "../../img/personOne.jpg";
import PersonTwo from "../../img/personTwo.jpg";
import PersonThree from "../../img/personThree.jpg";

const Testimonials = () => {
  return (
    <section css={styles} className="testimonials">
      <div className="testimonialHeading">
        <Title title="What Users Saying" />
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and
          <br /> Consonantia, there live the blind texts. Separated they live in
        </p>
      </div>
      <Container>
        <Carousel>
          <TestimonialsCard cardTitle="Marketing Manager" cardImg={PersonOne} />
          <TestimonialsCard
            cardTitle="Interface Designer"
            cardImg={PersonTwo}
          />
          <TestimonialsCard cardTitle="UI Designer" cardImg={PersonThree} />
          <TestimonialsCard cardTitle="Web Developer" cardImg={PersonOne} />
          <TestimonialsCard cardTitle="System Analyst" cardImg={PersonOne} />
        </Carousel>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 110px 0;
  .container {
    max-width: 870px;
    .rec.rec-carousel-wrapper {
      margin: 100px 0 0 0;
      &:focus,
      .rec-carousel:focus,
      .rec-slider-container:focus,
      .rec-slider-container .rec-slider:focus,
      .rec-slider-container .rec-slider div:focus {
        outline: none;
      }
      .rec-slider-container {
        min-height: 180px;
        max-height: 180px;
      }
      .rec-carousel button {
        display: none;
      }
      .rec-pagination {
        .rec.rec-dot.rec {
          box-shadow: none;
          background: rgba(0, 0, 0, 0.1);
          &.rec-dot_active {
            background: #ff8ba7;
          }
        }
      }
    }
  }
  .testimonialHeading {
    text-align: center;
    p {
      padding: 30px 0 0 0;
      color: #72789a;
      font-weight: 700;
      line-height: 1.7;
    }
  }
  @media (max-width: 690px) {
    .testimonialHeading {
      p {
        font-size: 14px;
        padding: 0 8px;
        margin: 10px 0;
        br {
          display: none;
        }
      }
    }
  }

  @media (max-width: 1175px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Testimonials;
