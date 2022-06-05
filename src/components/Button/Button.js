import React from 'react';
import PropTypes from "prop-types";
import s from '../Button/Button.module.css';


export default function Button({handleButton}) {
    return (<>
        <button
            type="button"
            className={s.Button}
            onClick={handleButton}>
            Load more...
        </button></>
    );
};

Button.propTypes = {
    handleButton: PropTypes.func,
}
