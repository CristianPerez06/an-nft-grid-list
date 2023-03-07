import { ChangeEvent, useCallback, useState } from 'react'
import Button from './shared/button/Button'
import Input from './shared/input/Input'

import styles from './Header.module.scss'

export interface HeaderProps {
  onAddressSelected: (value: string) => void
  isDisabled?: boolean
  className?: string
}

type Comp = (props: HeaderProps) => JSX.Element

const Header: Comp = (props) => {
  const { onAddressSelected, isDisabled = false } = props

  const [address, setAddress] = useState('')

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
  }, [])

  const handleOnClick = useCallback(() => {
    onAddressSelected?.(address)
  }, [address])

  return (
    <div className={styles.container}>
      <Input placeholder="Address" onChange={handleOnChange} className={styles.input} isDisabled={isDisabled} />
      <Button content={'Show NFTs!'} onClick={handleOnClick} className={styles.button} isDisabled={isDisabled} />
    </div>
  )
}

export default Header
