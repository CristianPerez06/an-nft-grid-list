import { ChangeEvent } from 'react'

import cn from 'classnames'
import styles from './Input.module.scss'

export interface InputProps {
  defaultValue?: string | number
  placeholder?: string
  maxLength?: number
  isDisabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
}

type Comp = (props: InputProps) => JSX.Element

export const Input: Comp = (props: InputProps) => {
  const { defaultValue, placeholder, maxLength, isDisabled = true, onChange, className } = props

  return (
    <div className={cn(styles.container, className)}>
      <input
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={isDisabled}
        className={cn(styles.input)}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
