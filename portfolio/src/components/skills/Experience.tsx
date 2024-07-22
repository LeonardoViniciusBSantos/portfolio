import styles from './Experience.module.scss'

const Experience = () => {
  return (
    <li className={styles.experience} >
        <div className={styles.period} >2020 - 2022</div>
        <div className={styles.description} >
            <h4>Desenvolvedor Front-end</h4>
            <h5>Freelancer</h5>
        </div>
    </li>
  )
}

export default Experience