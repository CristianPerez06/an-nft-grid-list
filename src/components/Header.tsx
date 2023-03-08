import { ChangeEvent, useCallback, useState } from 'react'
import Button from './shared/button/Button'
import Input from './shared/input/Input'

import cn from 'classnames'
import styles from './Header.module.scss'

export interface HeaderProps {
  onAddressSelected: (value: string) => void
  isDisabled?: boolean
  className?: string
}

type Comp = (props: HeaderProps) => JSX.Element

const Header: Comp = (props) => {
  const { onAddressSelected, isDisabled = false, className } = props

  const [address, setAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(false)

  const isAddressValid = useCallback(
    (address: string) => {
      return /^(0x){1}[0-9a-fA-F]{40}$/i.test(address)
    },
    [address]
  )

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const addr = e.currentTarget.value
    const valid = isAddressValid(addr)

    if (valid) {
      setIsValidAddress(true)
    } else {
      setIsValidAddress(false)
    }

    setAddress(addr)
  }

  const handleOnClick = useCallback(() => {
    onAddressSelected?.(address)
  }, [address])

  return (
    <div className={cn(styles.container, className)}>
      <Input placeholder="ETH Address" onChange={handleOnChange} className={styles.input} isDisabled={isDisabled} />
      <Button
        content={'Show NFTs!'}
        onClick={handleOnClick}
        className={styles.button}
        isDisabled={isDisabled || !address || !isValidAddress}
      />
    </div>
  )
}

export default Header
