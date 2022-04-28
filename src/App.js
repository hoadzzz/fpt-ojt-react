import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "./components/templates/Layout/Layout";
import { themeContext } from './Context'
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Provider store={store}>
      <div style={{
        background: darkMode ? 'var(--gray)' : 'white',
        color: darkMode ? 'white' : 'black'
      }}>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
