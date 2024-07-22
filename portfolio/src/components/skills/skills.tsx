import Experience from './Experience'
import styles from './skills.module.scss'

const skills = () => {
  return (
    <section className={styles.section}>
        <div className={styles.skills} >
            <div className={styles.heading} >
                <h2>Habilidades e Experiências</h2>
                <p>Voluptatem provident quibusdam aliquid, perferendis velit alias obcaecati, rem voluptate, iste quod laboriosam impedit corrupti nostrum nesciunt magnam.</p>
            </div>
            <div className={styles.content} >
                <h3>Habilidades</h3>
                <ul>
                    <li className='h4' >skill1</li>
                    <li className='h4' >skill2</li>
                    <li className='h4' >skill3</li>
                </ul>
            </div>
        </div>
        <div className={styles.experiences} >
            <h3>Experiências</h3>
            <ul>
                <Experience/>
                <Experience/>
                <Experience/>
            </ul>
        </div>
    </section>
  )
}

export default skills