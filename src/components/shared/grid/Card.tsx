import cn from 'classnames'

import styles from './Card.module.scss'
import { Nft } from '../../../types/types'
import { useCallback } from 'react'

export interface CardProps {
  nft: Nft
  className?: string
}

type Comp = (props: CardProps) => JSX.Element

export const Card: Comp = (props: CardProps) => {
  const { nft, className } = props

  const handleOnClick = useCallback(() => {
    console.log('open modal')
  }, [])

  return (
    <div className={cn(styles.container, className)} onClick={handleOnClick}>
      <div className={cn(styles.image)} style={{ backgroundImage: `url(${nft.imageUrl})` }}></div>
      <div className={cn(styles.description)}>
        <p className={cn(styles.text)}>{nft.name}</p>
      </div>
    </div>
  )
}

export default Card
