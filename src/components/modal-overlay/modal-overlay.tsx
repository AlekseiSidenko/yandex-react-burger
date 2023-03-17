import React, { FC } from 'react';
import overlayStyles from "./modal-overlay.module.css"

export const ModalOverlay: FC <{handleClose: () => void}> = ({ handleClose }) => {

  return (
    <div onClick={handleClose} className={overlayStyles.popup}>
    </div>
  )
}