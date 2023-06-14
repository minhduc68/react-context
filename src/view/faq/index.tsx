import { memo } from "react";

const FaqView = () => {
  console.log("faq render");

  return <h2>Child - Faq page</h2>;
};

export const Faq = memo(FaqView);
