import useSanityImage from '@/hooks/useSanityImage';
import styles from './About.module.scss'
import Image from 'next/image';
import { SanityDocument } from 'next-sanity';
import { sanityFetch } from '@/sanity';
import Box from '../UI/Box'

export default async function About() {
    const abouts = await sanityFetch<SanityDocument>({query: `*[_type == "about"][0]`});

    const texts = abouts.text;
    const images = abouts.image;

    const renderBiography = texts.map((texts: any) => ( <p key={texts._key}> {texts.paragraph} </p> ))
    const imageUrl = useSanityImage(images).url();

  return (
    <section className={styles.about}>
        <div className={styles.image}>
            <Image src={imageUrl} alt='Foto pessoal de Leonardo Vinicius' fill/>
            <div className= {styles.box}>
                <Box text = 'sobre' />
            </div>
        </div>
        <div className={styles.content}>
            <h2>{abouts.title}</h2>
                {renderBiography}
        <a href={abouts.url} className='btn btn-primary'>{abouts.button}</a>
        </div>
    </section>
  )
}