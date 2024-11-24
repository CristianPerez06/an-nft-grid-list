import { ChangeEvent, useRef, useState } from 'react'
import cn from 'classnames'
import Button from './shared/button/Button'
import Input from './shared/input/Input'
import styles from './Header.module.scss'

export interface HeaderProps {
  isDisabled?: boolean
  onAddressSelected: (value: string) => void
  customContainer?: string
}

type Comp = (props: HeaderProps) => JSX.Element

const Header: Comp = (props) => {
  const { isDisabled = false, onAddressSelected, customContainer } = props

  const previousValidAddress = useRef('')
  const [address, setAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(false)

  const isAddressValid = (address: string) => {
    return /^(0x){1}[0-9a-fA-F]{40}$/i.test(address)
  }

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

  const handleOnClick = () => {
    previousValidAddress.current = address
    onAddressSelected?.(address)
  }

  const shouldDisableButton = isDisabled || !address || !isValidAddress || previousValidAddress.current === address

  return (
    <div className={cn(styles.container, customContainer)}>
      <Input placeholder="ETH Address" onChange={handleOnChange} className={styles.input} isDisabled={isDisabled} />
      <Button
        content={'Show NFTs!'}
        onClick={handleOnClick}
        customContainer={styles.button}
        isDisabled={shouldDisableButton}
      />
    </div>
  )
}

export default Header
