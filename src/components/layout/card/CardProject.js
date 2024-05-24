import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './CardProject.module.css';
import DeleteProject from '../../requestApi/deleteProject/DeleteProject';

function CardProject({ id, name, price, handleRemove }) {

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    setShowDeleteDialog(false);
    
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      return resp.json();
    })
    .then(() => {
      handleRemove(id); // Atualiza a lista de projetos no componente pai
    })
    .catch((err) => console.log(err));
  };

  const cancelDelete = () => {
    setShowDeleteDialog(false);
  }

  return (
    <div className={styles.card_container}>
      <div className={styles.wrapper}>
        <div className={styles.banner_image}>
          <h1 className={styles.h1Name}>{name}</h1>
          <p><span>Price:</span>{price}</p>
          <div className={styles.button_wrappe}>
            <Link>
              <button className={styles.btn_outline} onClick={handleDeleteClick}>REMOVE</button>
            </Link>
            <Link>
              <button className={styles.btn_fill} >EDIT</button>
            </Link>
          </div>
        </div>
      </div>
      {showDeleteDialog && (
        <DeleteProject
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  )
}

export default CardProject;


