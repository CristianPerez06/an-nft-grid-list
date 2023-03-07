import cn from 'classnames'
import styles from './Alert.module.scss'

export enum TYPE {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface AlertProps {
  type?: TYPE
  text: string
  className?: string
}

type Comp = (props: AlertProps) => JSX.Element

const Alert: Comp = (props) => {
  const { type = TYPE.DEFAULT, text, className } = props
  return <div className={cn(styles.container, className, styles[type])}>{text}</div>
}

export default Alert
