import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleInfo, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

const mainButtonStyles = {
    backgroundColor: 'var(--blue)',
    width:'50px',
    height:'50px'
};

const actionButtonStyles = {
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
            actionButtonStyles={actionButtonStyles}
            style={style}
            icon={<FontAwesomeIcon icon={faCirclePlus} style={iconStyles}></FontAwesomeIcon>}
            //event={event}
            alwaysShowTitle={true}
        //onClick={someFunctionForTheMainButton}
        >

            <Action
                text="About us"
                style={actionButtonStyles}
            // onClick={handleEmailOnClick}
            >
                <FontAwesomeIcon icon={faCircleInfo} style={iconStyles}></FontAwesomeIcon>
            </Action>
            <Action
                text="Help"
                style={actionButtonStyles}

            //  onClick={handleHelpOnClick}
            >
                <FontAwesomeIcon icon={faCircleQuestion} style={iconStyles}></FontAwesomeIcon>
            </Action>
        </Fab>
    )
}

export default FloatButton
