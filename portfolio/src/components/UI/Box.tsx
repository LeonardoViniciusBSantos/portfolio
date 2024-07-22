import styles from './Box.module.scss'

const Box = ({text}: any) => {
  return (
    <div className={styles.box}>
        <span className='h4'>{text}</span>
    </div>
  )
}

export default Box