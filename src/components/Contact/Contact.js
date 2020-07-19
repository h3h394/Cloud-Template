/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../GlobalComponents/Container";
import ContactCardContainer from "./ContactCardContainer";

const Contact = () => {
  return (
    <section css={styles} className="contact" id="contact">
      <Container>
        <ContactCardContainer />
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  background: #421b9b;
  padding: 110px 0;
`;

export default Contact;
