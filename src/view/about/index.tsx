import { ReactNode, useContext } from "react";
import { SetThemeContext, ThemeContext } from "../../context/theme";

export const About = ({ children }: { children: ReactNode }) => {
  const themeContext = useContext(ThemeContext);
  const setThemeContext = useContext(SetThemeContext);

  console.log("about render", themeContext);

  return (
    <div
      style={{
        backgroundColor: themeContext === "dark" ? "grey" : "white",
        padding: 20,
        color: themeContext === "dark" ? "white" : "black",
      }}
    >
      <h2>About page</h2>
      {children}
      <button
        onClick={() =>
          setThemeContext &&
          setThemeContext(themeContext === "dark" ? "light" : "dark")
        }
      >
        Update theme
      </button>
    </div>
  );
};
