import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "./components/templates/Layout/Layout";

import { useSelector } from "react-redux";

function App() {
  // const theme = useContext(themeContext);
  // // const darkMode = theme.state.darkMode;

  const darkMode = useSelector((state) => state.theme.darkMode);
  return (
    // <Provider store={store}>
    <div
      style={{
        background: darkMode ? "var(--gray)" : "white",
        color: darkMode ? "white" : "black",
      }}
    >
      <Layout />
    </div>
    // </Provider>
  );
}

export default App;
