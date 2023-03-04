import React from "react";
import PropTypes from 'prop-types';
import modalStyles from "./modal.module.css"
import ReactDOM from 'react-dom';
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const reactModal = document.getElementById('react-modals')

export default function Modal({ children, handleClose, headName }) {

    React.useEffect(() => {
        const handleEsc = (evt) => {
            evt.key === "Escape" && handleClose()
        }
        document.addEventListener("keydown", handleEsc)
        return () => {
            document.removeEventListener("keydown", handleEsc)
        }
    }, [handleClose])

    return ReactDOM.createPortal(
        <div className={modalStyles.modal}>
            <div className={modalStyles.component}>
                {headName &&
                    <div className={modalStyles.head}>
                        <p className="text text_type_main-large mt-10 ml-10">{headName}</p>
                    </div>}
                <button onClick={handleClose} className={modalStyles.close}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
            <ModalOverlay handleClose={handleClose} />
        </div>, reactModal
    )
}

Modal.propTypes = {
    children: PropTypes.element,
    handleClose: PropTypes.func.isRequired,
    headName: PropTypes.string
}