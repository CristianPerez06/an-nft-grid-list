import cn from 'classnames'

import styles from './Grid.module.scss'
import { Nft } from '../../types/types'
import Card from './Card'

export interface GridProps {
  nfts: Nft[]
  className?: string
}

type Comp = (props: GridProps) => JSX.Element

export const Grid: Comp = (props: GridProps) => {
  const { nfts, className } = props

  return (
    <div className={cn(styles.container, className)}>
      {nfts.map((nft: Nft, index) => {
        return <Card key={index} nft={nft} />
      })}
    </div>
  )
}

export default Grid
