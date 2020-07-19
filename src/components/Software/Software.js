/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import SoftwareBg from "./SoftwareBg";
import SoftwareCard from "./SoftwareCard";

const Software = () => {
  return (
    <section css={styles} className="software" id="company">
      <Title title="What Our Software Can Do For You" />
      <Container>
        <SoftwareBg />
        <div className="softwareContainer">
          <SoftwareCard
            softwareTitle="Responsive Design"
            softwareIcon="fas fa-server"
          />
          <SoftwareCard
            softwareTitle="Android Apps Development"
            softwareIcon="fas fa-cloud-upload-alt"
          />
          <SoftwareCard
            softwareTitle="iOs Apps Development"
            softwareIcon="fas fa-server"
          />
          <SoftwareCard
            softwareTitle="UX/UI Design"
            softwareIcon="fas fa-cloud-upload-alt"
          />
          <SoftwareCard
            softwareTitle="Print Ready Design"
            softwareIcon="fas fa-server"
          />
        </div>
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 110px 0;
  .container {
    padding: 100px 0 0 0;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 840px) {
    .title {
      padding: 0 40px;
    }
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 841px) and (max-width: 1175px) {
    .container {
      .softwareContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
`;

export default Software;
