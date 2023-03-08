import Alert, { Type } from '../../shared/alert/Alert'

import styles from './GridAlert.module.scss'

export interface GridAlertProps {
  text: string
  type?: Type
  className?: string
}

type Comp = (props: GridAlertProps) => JSX.Element

const LoadMoreButton: Comp = (props) => {
  const { text, type = Type.DEFAULT } = props

  return (
    <div className={styles.container}>
      <Alert text={text} type={type} className={styles.message} />
    </div>
  )
}

export default LoadMoreButton
