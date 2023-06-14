import "./App.css";

import { About } from "./view/about";
import { Faq } from "./view/faq";
import { Home } from "./view/home";
import { Post } from "./view/post";
import { ThemeProvider } from "./context/theme";

function App() {
  console.log("app render");

  return (
    <ThemeProvider>
      <>
        <h2>React context</h2>
        <Home />
        <About>
          <Faq />
          <Post />
        </About>
      </>
    </ThemeProvider>
  );
}

export default App;
