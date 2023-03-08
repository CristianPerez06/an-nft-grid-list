import cn from 'classnames'
import styles from './Button.module.scss'

export interface ButtonProps {
  content: string | JSX.Element
  isDisabled?: boolean
  onClick: () => void
  className?: string
}

type Comp = (props: ButtonProps) => JSX.Element

export const Button: Comp = (props: ButtonProps) => {
  const { content, isDisabled = false, onClick, className } = props

  return (
    <button className={cn(styles.button, className)} type="button" disabled={isDisabled} onClick={onClick}>
      <div className={styles.content}>{content}</div>
    </button>
  )
}

export default Button
