import XIcon from '../button/XIcon'
import styles from './Modal.module.scss'
import { ACTIONS as MODAL_ACTIONS, useModalContext } from './ModalProvider'

type Comp = () => JSX.Element | null

const Modal: Comp = () => {
  const { state, dispatch } = useModalContext()

  const handleCloseClick = () => {
    dispatch?.({ type: MODAL_ACTIONS.CLOSE })
  }

  if (!state?.isOpen) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.closeButton} onClick={handleCloseClick}>
          <XIcon />
        </button>
      </div>
      <div className={styles.content}>{state.children}</div>
    </div>
  )
}

export default Modal
