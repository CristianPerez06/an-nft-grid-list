import { useCallback } from 'react'
import { Nft } from '../types/types'
import Button from './shared/button/Button'
import NotFound from '../assets/img/not-found.jpg'

import cn from 'classnames'
import styles from './Details.module.scss'

export interface DetailsProps {
  nft: Nft
  className?: string
  onCloseClick: () => void
}

type Comp = (props: DetailsProps) => JSX.Element

const Details: Comp = (props) => {
  const { nft, className, onCloseClick } = props

  const handleOnCancel = useCallback(() => {
    onCloseClick()
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.imageContainer}>
        <div className={styles.image} style={{ backgroundImage: `url(${nft.imageUrl || NotFound})` }}></div>
      </div>
      <div className={styles.description}>
        <div className={styles.textAndValue}>
          <span className={styles.text}>Name: </span>
          {nft.name}
        </div>
        <div className={styles.textAndValue}>
          <span className={styles.text}>Description: </span>
          {nft.description}
        </div>
        <div className={styles.textAndValue}>
          <span className={styles.text}>Contract address: </span>
          {nft.contractAddress}
        </div>
        <div className={styles.textAndValue}>
          <span className={styles.text}>Creator address: </span>
          {nft.creatorAddress}
        </div>
      </div>
      <div className={styles.buttons}>
        <a
          className={styles.link}
          href={`https://opensea.io/assets/ethereum/${nft.contractAddress}/${nft.tokenId}`}
          target="_blank"
        >
          Go to Opensea
        </a>
        <Button content={'Cancel'} onClick={handleOnCancel} className={styles.button} />
      </div>
    </div>
  )
}

export default Details
