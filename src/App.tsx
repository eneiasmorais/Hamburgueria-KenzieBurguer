import Router from "./routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => (
  <>
    <GlobalStyles />
    <Router />
  </>
);

export default App;
