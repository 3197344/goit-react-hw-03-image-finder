import React from 'react';
import PropTypes from "prop-types";
import s from '../Button/Button.module.css';


export default function Button({loadImages}) {
    return (<>
        <button
            type="button"
            className={s.Button}
            onClick={loadImages}>
            Load more...
        </button></>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
}
