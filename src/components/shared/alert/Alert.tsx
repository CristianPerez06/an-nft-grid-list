import cn from 'classnames'
import styles from './Alert.module.scss'

export enum Type {
  DEFAULT = 'default',
  DANGER = 'danger',
}

export interface AlertProps {
  type?: Type
  text: string
  className?: string
}

type Comp = (props: AlertProps) => JSX.Element

const Alert: Comp = (props) => {
  const { type = Type.DEFAULT, text, className } = props
  return <div className={cn(styles.container, className, styles[type])}>{text}</div>
}

export default Alert
