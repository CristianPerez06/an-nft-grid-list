import { Nft } from '../types/types'
import styles from './Content.module.scss'
import Grid from './shared/grid/Grid'

export interface ContentProps {
  nfts: Nft[]
  className?: string
}

type Comp = (props: ContentProps) => JSX.Element

const Content: Comp = (props) => {
  const { nfts } = props

  return (
    <div className={styles.container}>
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
