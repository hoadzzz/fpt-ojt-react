import { createContext, useReducer } from "react";

export const themeContext = createContext();
const localTheme = localStorage.getItem('darkMode');
const initialState = { darkMode: localTheme == null ? false : localTheme };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>{props.children}</themeContext.Provider>
  );
};
