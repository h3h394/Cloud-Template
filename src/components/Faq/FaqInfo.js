/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import FaqDesc from "./FaqDesc";
import FaqHeading from "./FaqHeading";
import FaqData from "./FaqData";

const FaqInfo = () => {
  const [hidden, setHidden] = useState("How To Make An Account?");

  return (
    <div css={styles} className="faqInfo">
      <FaqDesc />
      <div className="faqContainer">
        <FaqHeading
          type="How To Make An Account?"
          hidden={hidden}
          setHidden={setHidden}
        />
        <FaqData type="How To Make An Account?" hidden={hidden} />
        <FaqHeading
          hidden={hidden}
          setHidden={setHidden}
          type="How To Manage Your Dashboard?"
        />
        <FaqData type="How To Manage Your Dashboard?" hidden={hidden} />
        <FaqHeading
          hidden={hidden}
          setHidden={setHidden}
          type="How To Grow Your Investments Funds?"
        />
        <FaqData type="How To Grow Your Investments Funds?" hidden={hidden} />
        <FaqHeading
          hidden={hidden}
          setHidden={setHidden}
          type="What Are Those Requirements For Businesses?"
        />
        <FaqData
          type="What Are Those Requirements For Businesses?"
          hidden={hidden}
        />
      </div>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 540px;
  padding: 6px 0 0 0;
  @media (min-width: 1001px) and (max-width: 1175px) {
    max-width: 55%;
  }
`;

export default FaqInfo;
