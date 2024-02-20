import searchic from '../../assets/search-icon.svg';
import emojiic from '../../assets/emoji-icon.svg';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={searchic} alt='search-ic' className={styles.navIcon} style={{ marginRight: 8}} />
            
            <img src={emojiic} alt='emojiic' className={styles.navIcon} style={{ marginRight: 8}} />

            <span className={styles.navTitle}>searcher</span>
        </nav>
    )
}

export default Navbar