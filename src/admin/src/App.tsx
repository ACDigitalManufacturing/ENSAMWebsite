import RootRoutes from "routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = function (): JSX.Element {
  return (
    <>
      <RootRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
