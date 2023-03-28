import React, { FC, ReactNode } from "react";
import modalStyles from "./modal.module.css"
import ReactDOM from 'react-dom';
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useLocation } from "react-router-dom";

const reactModal = document.getElementById('react-modals') as HTMLElement

type TModal = {
    children: ReactNode,
    handleClose?: () => void,
    headName?: string
}

export const Modal: FC<TModal> = ({ children, handleClose, headName }) => {
    const location = useLocation()

    React.useEffect(() => {
        if (handleClose !== undefined) {
            const handleEsc = (evt: KeyboardEvent) => {
                evt.key === "Escape" && handleClose()
            }
            document.addEventListener("keydown", handleEsc)
            return () => {
                document.removeEventListener("keydown", handleEsc)
            }
        }
    }, [handleClose])

    return ReactDOM.createPortal(
        <div className={modalStyles.modal}>
            <div className={modalStyles.component}>
                {headName &&
                    <div className={modalStyles.head}>
                        <p className="text text_type_main-large mt-10 ml-10">{headName}</p>
                    </div>
                }
                {location.state && location.state.orderNumber &&
                    <div className={modalStyles.head}>
                        <p className="text text_type_digits-default mt-15 ml-10"># {location.state.orderNumber}</p>
                    </div>}
                {handleClose &&
                    <button onClick={handleClose} className={modalStyles.close}>
                        <CloseIcon type="primary" />
                    </button>}
                {children}
            </div>
            <ModalOverlay handleClose={handleClose} />
        </div>, reactModal
    )
}