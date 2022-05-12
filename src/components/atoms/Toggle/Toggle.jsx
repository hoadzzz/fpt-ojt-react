import Moon from '@iconscout/react-unicons/icons/uil-moon'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import React, { useContext } from 'react'
import { themeContext } from '../../../context/ThemeContext'

const Toggle = () => {
  const theme = useContext(themeContext);
  let darkMode = theme.state.darkMode;
  const handleClick = () => {
    localStorage.setItem('darkMode', !darkMode);
    theme.dispatch({ type: 'toggle' });
  }
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}></div>
    </div>
  )
}

export default Toggle