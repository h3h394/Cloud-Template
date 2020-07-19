/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Title from "../GlobalComponents/Title";
import Container from "../GlobalComponents/Container";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section css={styles} className="pricing" id="pricing">
      <Title title="Our Best Pricing" />
      <Container>
        <PricingCard
          cardPlan="Basic Plan"
          cardPrice="0"
          cardFeatures="100% free. Forever"
          cardBandwidth="150GB"
          cardStorage="100GB"
          cardOverage="$1.00 / GB"
        />
        <PricingCard
          cardPlan="Advanced Plan"
          cardPrice="19"
          cardFeatures="All features are included"
          cardBandwidth="450GB"
          cardStorage="400GB"
          cardOverage="$2.00 / GB"
        />
        <PricingCard
          cardPlan="Expert Plan"
          cardPrice="49"
          cardFeatures="All features are included"
          cardBandwidth="250GB"
          cardStorage="200GB"
          cardOverage="$5.00 / GB"
        />
        <PricingCard
          cardPlan="Pro Plan"
          cardPrice="99"
          cardFeatures="All features are included"
          cardBandwidth="450GB"
          cardStorage="400GB"
          cardOverage="$20.00 / GB"
        />
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
    padding: 90px 0 0 0;
  }
  @media (max-width: 660px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 661px) and (max-width: 1175px) {
    .container {
      flex-wrap: wrap;
    }
  }
`;

export default Pricing;
