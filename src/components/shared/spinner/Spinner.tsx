import cn from 'classnames'
import styles from './Spinner.module.scss'

export enum Type {
  FULL = 'full',
  CONTENT = 'content',
}

interface SpinnerProps {
  size?: number
  type?: Type
  className?: string
}

type Comp = (props: SpinnerProps) => JSX.Element

const Spinner: Comp = (props) => {
  const { size = 75, type = Type.FULL, className } = props

  const strokeWidth = type === Type.CONTENT ? 12 : 6
  const r = type === Type.CONTENT ? 25 : 30

  return (
    <div className={cn(styles.container, className)}>
      <svg className={styles.spinner} width={size} height={size} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle
          className={cn(styles.path, styles.withColors, type === Type.CONTENT && styles.withSingleColor)}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          cx="33"
          cy="33"
          r={r}
        ></circle>
      </svg>
    </div>
  )
}

export default Spinner
