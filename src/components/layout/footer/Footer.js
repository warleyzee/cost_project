import {FaInstagram, FaLinkedin, FaGit} from 'react-icons/fa';

import styles from './footer.module.css';

function Footer(){
  return(
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/warleyzee" target="GIT" rel="GIT">
            <FaGit />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/warleyzee/" target="INSTA" rel="INSTA">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/warley-souza-82b0b3117/" target="LINKEDIN" rel="LINKEDIN">  
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Cost</span> &copy; 2024
      </p>
    </footer>
   )
} 

export default Footer;