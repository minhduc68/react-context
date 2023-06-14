import { ReactElement, createContext, useState } from "react";

export const ThemeContext = createContext("dark");
export const SetThemeContext = createContext<React.Dispatch<
  React.SetStateAction<string>
> | null>(null);

export type ThemeProviderProps = {
  children: ReactElement;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
};
