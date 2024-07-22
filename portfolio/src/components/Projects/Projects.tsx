import { SanityDocument } from 'next-sanity';
import Project from './Project';
import styles from './Projects.module.scss';
import { sanityFetch } from '@/sanity';

export default async function Projects () {
  const projectsData = await sanityFetch<SanityDocument>({ query: `*[_type == "projects"][0]` });

  const { title, projects: portfolio, button, url } = projectsData; 

  const renderProjects = portfolio.map((project: any) => (
    <Project key={project._key} project={project} />
  ));

  return (
    <section className={styles.projects} id='projects'>
      <h2>{title}</h2>
      <ul className={styles.list}>{renderProjects}</ul>
      <a href={url} className='btn btn-primary'>
        {button}
      </a>
    </section>
  );
};