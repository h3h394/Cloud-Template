/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section css={styles} className="services">
      <Title title="Cloud Services" />
      <Container>
        <ServiceCard
          serviceTitle="Cloud databases"
          serviceIcon="fas fa-cloud-download-alt"
        />
        <ServiceCard
          serviceTitle="Website Hosting"
          serviceIcon="fas fa-server"
        />
        <ServiceCard
          serviceTitle="File Storage"
          serviceIcon="fas fa-user-nurse"
        />
        <ServiceCard
          serviceTitle="Forex Trading"
          serviceIcon="fab fa-themeisle"
        />
        <ServiceCard
          serviceTitle="File Backups"
          serviceIcon="fas fa-cloud-upload-alt"
        />
        <ServiceCard serviceTitle="Remote Desktop" serviceIcon="fas fa-cog" />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  padding: 110px 0;
  background: #fafafa;
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px 0 0 0;
  }
  @media (max-width: 868px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 869px) and (max-width: 1175px) {
    .container {
      max-width: 766px;
    }
  }
`;

export default Services;
