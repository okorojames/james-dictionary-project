import { useEffect } from "react";
import Body from "./Body";
import Footer from "./components/Footer";
import { BrowserRouter, useLocation } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

//
export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
};
