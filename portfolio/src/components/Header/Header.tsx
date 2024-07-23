import styles from './Header.module.scss'
import { RiLinkedinFill, RiWhatsappFill, RiGithubFill} from 'react-icons/ri';
import { AiOutlineArrowDown } from 'react-icons/ai';
import useSanityImage from '@/hooks/useSanityImage';
import Image from 'next/image';
import { SanityDocument } from 'next-sanity';
import { sanityFetch } from '@/sanity';

export default async function Header() {
    const headers = await sanityFetch<SanityDocument>({query: `*[_type == "header"][0]`});
    const social = await sanityFetch<SanityDocument>({query: `*[_type == "social"][0]`});
    const imageUrl = useSanityImage(headers.image).url();
    const { linkedin, gitHub, whatsapp } = social;

    return(
        <header className={styles['header-wrapper']}>
            <div className={styles.header}>
                <div className={styles.image}>
                    <Image src={imageUrl} alt={headers.name} fill/>
                </div>
                <div className={styles.content}>
                    <span>Olá 👋 pode me chamar de {headers.name}. Sou um ...</span>
                    <h1>{headers.ocupation}</h1>
                    <p> {headers.summary} </p>
                </div>
                <div className= {styles.social}>
                    <a href={linkedin}>
                        <RiLinkedinFill className={styles.icon}/>
                    </a>
                    <a href={gitHub}>
                        <RiGithubFill className={styles.icon}/>
                    </a>
                    <a href={whatsapp}>
                        <RiWhatsappFill className={styles.icon}/>
                    </a>
                </div>
                <a href="#about" className={styles.arrow}>
                    <AiOutlineArrowDown className={styles.icon}/>
                </a>
            </div>
        </header>
    );
}
