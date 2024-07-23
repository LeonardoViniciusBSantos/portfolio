import { SanityDocument } from 'next-sanity';
import Experience from './Experience'
import styles from './skills.module.scss'
import { sanityFetch } from '@/sanity';

const skills = async () => {

    const skills = await sanityFetch<SanityDocument>({ query: `*[_type == "skills"][0]` });

    const {
    title,
    subtitle,
    skills_title,
    skills_list,
    experience_title,
    experience,
  } = skills;

  const renderSkills = skills_list.map((skill: any) => (
    <li key={skill._key} className='h5'>
      {skill.skill}
    </li>
  ));

  const renderExperience = experience.map((experience: any) => (
    <Experience key={experience._key} experience={experience} />
  ));


  return (
    <section className={styles.section}>
        <div className={styles.skills} >
            <div className={styles.heading} >
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <div className={styles.content} >
                <h3>{skills_title}</h3>
                <ul>
                    {renderSkills}
                </ul>
            </div>
        </div>
        <div className={styles.experiences} >
            <h3>{experience_title}</h3>
            <ul>
                {renderExperience}
            </ul>
        </div>
    </section>
  )
}

export default skills