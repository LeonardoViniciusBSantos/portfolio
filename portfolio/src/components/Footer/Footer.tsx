import { SanityDocument } from 'next-sanity';
import Box from '../UI/Box';
import styles from './Footer.module.scss';
import { sanityFetch } from '@/sanity';

export async function Footer () {

  const footer = await sanityFetch<SanityDocument>({query: `*[_type == "footer"][0]`});

  const { title, copy } = footer; 

  return (
    <footer className={styles['footer-wrapper']} id='footer'>
      <div className={styles.footer}>
        <div className={styles.box}>
          <Box text='contato' />
        </div>
        <h2>{title}</h2>
       
        <span className={styles.copy}>{copy}</span>
      </div>
    </footer>
  );
};