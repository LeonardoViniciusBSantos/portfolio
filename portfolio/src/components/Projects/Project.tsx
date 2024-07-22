import { SanityDocument } from 'next-sanity';
import useSanityImage from '../../hooks/useSanityImage';
import styles from './Project.module.scss';
import Image from 'next/image'; 
import { AiFillGithub } from 'react-icons/ai';
import { sanityFetch } from '@/sanity';

export default function Project({ project }: any) {

  const { image, title, technologies, description, link } = project;
  const imageUrl = useSanityImage(image).url();


  const renderTechnologies = technologies.map((technology: any) => (
    <span key={technology._key}>{technology.technology}</span>
  ));

  return (
    <li className={styles.project}>
      <a href={link}>
        <div className={styles.image}>
          <AiFillGithub className={styles.icon} />
          <Image src={imageUrl} fill alt=''/>  
        </div>
        {renderTechnologies}
        <h3 className='h5'>{title}</h3>
        <p>{description}</p>
      </a>
    </li>
  );
};
