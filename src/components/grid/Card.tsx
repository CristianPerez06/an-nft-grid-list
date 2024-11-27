import { Nft } from '../../types/types'
import { useCallback } from 'react'
import { ACTIONS as SIDE_PANEL_ACTIONS, useModalContext } from '../shared/modal/ModalProvider'
import Details from '../Details'
import NotFoundImage from '../../assets/img/not-found.jpg'
import ErrorImage from '../../assets/img/error.jpg'

import cn from 'classnames'
import styles from './Card.module.scss'

export interface CardProps {
  nft: Nft
  className?: string
}

type Comp = (props: CardProps) => JSX.Element

export const Card: Comp = (props: CardProps) => {
  const { nft, className } = props

  const { dispatch } = useModalContext()

  const handleOnImageError = (event: any) => {
    event.currentTarget.src = ErrorImage
  }

  const handleOnClose = useCallback(() => {
    dispatch?.({ type: SIDE_PANEL_ACTIONS.CLOSE })
  }, [])

  const handleOnClick = useCallback(() => {
    dispatch?.({ type: SIDE_PANEL_ACTIONS.OPEN, children: <Details nft={nft} onCloseClick={handleOnClose} /> })
  }, [])

  return (
    <div className={cn(styles.container, className)} onClick={handleOnClick}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={nft.thumbnailUrl || NotFoundImage} onError={handleOnImageError} />
      </div>
      <div className={cn(styles.description)}>
        <p className={cn(styles.text)}>{nft.name || '-'}</p>
      </div>
    </div>
  )
}

export default Card
