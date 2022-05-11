import { useContext } from "react";
import { Provider } from "react-redux";
import "./App.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import Layout from "./components/templates/Layout/Layout";
import { themeContext } from './context/ThemeContext';
import { store } from "./redux/store";


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
  return (
    <Provider store={store}>
      <div style={{
        background: darkMode ? 'var(--gray)' : '',
        color: darkMode ? 'white' : 'black'
      }}>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
