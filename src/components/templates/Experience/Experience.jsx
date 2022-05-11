import React, { useContext } from "react";
import { themeContext } from "../../../context/ThemeContext";

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const styleCircle = {
        color: darkMode ? 'var(--blue)' : '',
        backgroundImage: darkMode ? 'linear-gradient(to bottom, #87e6fb 0%, #ddc05c 100%)' : ''
    }
    const styleText = { color: darkMode ? 'white' : '' }
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="e-circle" style={styleCircle}>13+</div>
                <span style={styleText}>Years</span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="e-circle" style={styleCircle}>200+</div>
                <span style={styleText}>Facilitis</span>
                <span>In VietNam</span>
            </div>
            <div className="achievement">
                <div className="e-circle" style={styleCircle}>5+</div>
                <span style={styleText}>SubCompanies</span>
                <span>Work</span>
            </div>
        </div>
    )
}

export default Experience