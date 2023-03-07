import { useEffect } from 'react'
import XIcon from '../button/XIcon'
import { ACTIONS as MODAL_ACTIONS, useModalContext } from './ModalProvider'

import styles from './Modal.module.scss'

type Comp = () => JSX.Element | null

const Modal: Comp = () => {
  const { state, dispatch } = useModalContext()

  const handleCloseClick = () => {
    dispatch?.({ type: MODAL_ACTIONS.CLOSE })
  }

  useEffect(() => {
    if (state && state.isOpen === true) {
      // Remove scrollbar when Modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      // Re-add scrollbar when Modal is closed
      document.body.style.overflow = 'initial'
    }
  }, [state])

  // Return empty if modal is not needed
  if (!state?.isOpen) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <div className={styles.buttonContainer}>
          <button className={styles.closeButton} onClick={handleCloseClick}>
            <XIcon />
          </button>
        </div>
        <div className={styles.children}>{state.children}</div>
      </div>
    </div>
  )
}

export default Modal
