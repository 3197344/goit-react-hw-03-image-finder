import React, { Component } from 'react';

import PropTypes from 'prop-types';
import s from "../Modal/Modal.module.css";

export class Modal extends Component {
    
    static propTypes = {
    onClose: PropTypes.func.isRequired,
    modalImg: PropTypes.string.isRequired,
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
        const { modalImg} = this.props;
        return (
            <div className={s.overlay}
                onClick={this.handleBackdropClick}>
                <div className={s.modal}>
                    <img
                        src={modalImg}
                        alt="img"/>
                </div>
            </div>         
            )
        }
    };

export default Modal;
