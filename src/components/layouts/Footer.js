import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <Link to='https://github.com/renantech' target={'_blank'}><FaGithub /></Link>
                </li>
                <li>
                    <Link to='https://www.instagram.com/renan.mvc/' target={'_blank'}><FaInstagram /></Link>
                </li>
                <li>
                    <Link to='https://www.linkedin.com/in/renan-tech/' target={'_blank'}><FaLinkedin /></Link>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Cost</span> &copy; 2023 </p>
        </footer>
    )
}