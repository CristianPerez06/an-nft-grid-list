import Spinner from '../../shared/spinner/Spinner'

import styles from './GridLoader.module.scss'

type Comp = () => JSX.Element

const GridLoader: Comp = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  )
}

export default GridLoader
