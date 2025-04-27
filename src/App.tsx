import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
