import React from 'react';
import PropTypes from 'prop-types';
import overlayStyles from"./modal-overlay.module.css"

export default function ModalOverlay({ handleClose }) {
  React.useEffect(() => {

    const handleEsc = (evt) => {
      evt.key === "Escape" && handleClose()
    }

    document.addEventListener("keydown", handleEsc)

    return() => {
      document.removeEventListener("keydown", handleEsc)
    }
  },[handleClose])

  return(
    <div onClick={() => handleClose()} className={overlayStyles.popup}>
    </div>
  )
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}