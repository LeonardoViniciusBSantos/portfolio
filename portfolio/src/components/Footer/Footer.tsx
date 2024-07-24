import { SanityDocument } from 'next-sanity';
import Box from '../UI/Box';
import styles from './Footer.module.scss';
import { sanityFetch } from '@/sanity';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

export async function Footer () {

  const footer = await sanityFetch<SanityDocument>({query: `*[_type == "footer"][0]`});

  const { title, copy } = footer; 

  return (
    <footer className={styles['footer-wrapper']} id='footer'>
      <div className={styles.footer}>
        <div className={styles.box}>
          <Box text='contato' />
        </div>
        <div>
          <h2>{title}</h2>
        </div>
        <div className={styles.contact}>
          <ul>
            <li><FaEnvelope className={styles.icon} /><a href="#">leonardovinicius@gmail.com</a></li>
            <li><RiWhatsappFill className={styles.icon} /><a href="https://wa.me/5563992874889">(63) 99287-4889</a></li>
            <li><FaLinkedin className={styles.icon} /><a href="https://www.linkedin.com/in/leonardo-vinicius-batista-santos-396745209" target="_blank">LinkedIn</a></li>
            <li><FaGithub className={styles.icon} /><a href="https://github.com/LeonardoViniciusBSantos" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};