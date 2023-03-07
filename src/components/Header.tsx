import { ChangeEvent, useCallback, useState } from 'react'
import Button from './shared/button/Button'
import Input from './shared/input/Input'

import styles from './Header.module.scss'

export interface HeaderProps {
  onAddressSelected: (value: string) => void
  className?: string
}

type Comp = (props: HeaderProps) => JSX.Element

const Header: Comp = (props) => {
  const { onAddressSelected } = props

  const [address, setAddress] = useState('')

  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setAddress(e.currentTarget.value)
  }, [])

  const handleOnClick = useCallback(() => {
    console.log(address)
    onAddressSelected?.(address)
  }, [])

  return (
    <div className={styles.container}>
      <Input placeholder="Address" onChange={handleOnChange} className={styles.input} />
      <Button content={'Show NFTs!'} onClick={handleOnClick} className={styles.button} />
    </div>
  )
}

export default Header
