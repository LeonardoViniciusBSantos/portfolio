import styles from "./Navlink.module.scss"

const Navlink = ({url, text, toggleMenu = null}: any) => {
  return (
    <li className={styles.item}>
        <a href={url} className= 'h6' onClick={toggleMenu}>{text}</a>
    </li>
  )
}

export default Navlink