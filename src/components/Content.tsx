import styles from './Content.module.scss'

export interface ContentProps {
  address?: string
  className?: string
}

type Comp = (props: ContentProps) => JSX.Element

const Content: Comp = () => {
  return <div className={styles.container}></div>
}

export default Content
