import Button from '../../shared/button/Button'
import Spinner, { Type as SpinnerType } from '../../shared/spinner/Spinner'

import styles from './GridLoadMoreButton.module.scss'

export interface GridLoadMoreButtonProps {
  isLoading?: boolean
  onClick: () => void
  className?: string
}

type Comp = (props: GridLoadMoreButtonProps) => JSX.Element

const GridLoadMoreButton: Comp = (props) => {
  const { isLoading, onClick } = props

  const handleOnClick = () => {
    onClick()
  }

  return (
    <div className={styles.container}>
      <Button
        content={isLoading ? <Spinner size={16} type={SpinnerType.CONTENT} /> : 'Load more!'}
        onClick={handleOnClick}
        customContainer={styles.loadMore}
        isDisabled={isLoading}
      />
    </div>
  )
}

export default GridLoadMoreButton
