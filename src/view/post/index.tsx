import { ThemeContext } from "../../context/theme";
import { useContext } from "react";

export const Post = () => {
  const themeContext = useContext(ThemeContext);
  console.log("post render", themeContext);

  return <h2>Child - Post page</h2>;
};
