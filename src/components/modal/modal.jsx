import React from "react";
import modalStyles from "./modal.module.css"
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const reactModal = document.getElementById('react-modals')

export default function Modal({children, modalName, handleClose}) {
    
    return ReactDOM.createPortal (
        <div className={modalStyles.modal}>
            <div className={modalStyles.component}>
                {modalName &&
                <div className={modalStyles.head}>
                    <p className="text text_type_main-large mt-10 ml-10">{modalName}</p>
                </div>}
                    <button onClick={() => handleClose()} className={modalStyles.close}>
                        <CloseIcon type="primary" />
                    </button>
                {children}
            </div>
        </div>, reactModal
    )
}