import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from "../Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    state = {
        loading: false,
    }

    static propTypes = {
    onClose: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    };

    componentDidMount() {
    window.addEventListener('keydown',this.handleKeyDown )
    };

    componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose()
        }
    };

    render() {
        const { src, alt } = this.props;
        return createPortal(
            <div className={s.overlay} onClick={this.handleBackdropClick}>
                <div className={s.modal}>
                    <img
                        className={s.modalImg}
                        src={src}
                        alt={alt}>
                    </img> 
                </div>
            </div>,
            modalRoot,
        );
    }
};

export default Modal;
