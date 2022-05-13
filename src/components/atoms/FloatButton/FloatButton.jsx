import { faCircleInfo, faCirclePlus, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Action, Fab } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

const mainButtonStyles = {
    backgroundColor: 'var(--blue)',
    width: '50px',
    height: '50px'
};

const actionbuttonstyles = {
    backgroundColor: 'var(--blue)',
    color: 'black',
    width: '40px',
    height: '40px',
    right: '0px',
};

const iconStyles = {
    width: '30px',
    height: '30px',
    color: 'white',

};

const style = {
    bottom: '-5px',
    right: '-5px',
}

const FloatButton = () => {
    return (
        <Fab
            mainButtonStyles={mainButtonStyles}
            actionbuttonstyles={actionbuttonstyles}
            style={style}
            icon={<FontAwesomeIcon icon={faCirclePlus} style={iconStyles}></FontAwesomeIcon>}
            alwaysShowTitle={true}
        >
            <Action
                text="About us"
                style={actionbuttonstyles}>
                <Link to='/about'><FontAwesomeIcon icon={faCircleInfo} style={iconStyles}></FontAwesomeIcon></Link>
            </Action>

            <Action
                text="Help"
                style={actionbuttonstyles}>
                <FontAwesomeIcon icon={faCircleQuestion} style={iconStyles}></FontAwesomeIcon>
            </Action>
        </Fab>
    )
}

export default FloatButton
