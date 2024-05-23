import { Link } from 'react-router-dom';

import styles from './CardProject.module.css';

function CardProject({ name, price, handleRemove }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.wrapper}>
        <div className={styles.banner_image}>
          <h1 className={styles.h1Name}>{name}</h1>
          <p><span>Price:</span>{price}</p>
          <div className={styles.button_wrappe}>
            <Link to="/">
              <button className={styles.btn_outline}>REMOVE</button>
            </Link>
            <Link to="/">
              <button className={styles.btn_fill}>EDIT</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProject;


