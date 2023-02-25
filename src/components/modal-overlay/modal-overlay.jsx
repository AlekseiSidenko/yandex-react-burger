import React from 'react';
import PropTypes from 'prop-types';
import overlayStyles from"./modal-overlay.module.css"

export default function ModalOverlay({handleClose}) {

  return(
    <div onClick={handleClose} className={overlayStyles.popup}>
    </div>
  )
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}