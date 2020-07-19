/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const FaqData = ({ hidden, type }) => {
  return (
    <div
      css={styles}
      className={(hidden === type ? "" : "hidden") + " faqData"}
    >
      <p>1. Far far away, behind the word mountains</p>
      <p>2. Consonantia, there live the blind texts</p>
      <p>3. When she reached the first hills of the Italic Mountains</p>
      <p>4. Bookmarksgrove, the headline of Alphabet Village</p>
      <p>5. Separated they live in Bookmarksgrove right</p>
    </div>
  );
};

const styles = css`
  height: 200px;
  opacity: 1;
  margin: 10px 0;
  transition: all 600ms ease-in-out;
  overflow: hidden;
  &.hidden {
    height: 0;
    opacity: 0;
  }
  p {
    padding: 8px 14px;
  }
`;

export default FaqData;
