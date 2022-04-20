import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
