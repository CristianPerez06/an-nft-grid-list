import { Nft } from '../types/types'
import Grid from './grid/Grid'

import cn from 'classnames'
import styles from './Content.module.scss'

export interface ContentProps {
  nfts: Nft[]
  className?: string
}

type Comp = (props: ContentProps) => JSX.Element

const Content: Comp = (props) => {
  const { nfts, className } = props

  return (
    <div className={cn(styles.container, className)}>
      {nfts.length === 0 ? (
        <div className="message-container">
          <p>No nfts to display</p>
        </div>
      ) : (
        <div className={styles.gridContainer}>
          <Grid nfts={nfts} />
        </div>
      )}
    </div>
  )
}

export default Content
