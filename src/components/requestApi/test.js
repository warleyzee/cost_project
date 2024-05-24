
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

import Message from '../../layout/message/Message';
import styles from './Project.module.css';
import Container from '../../layout/container/container';
import LinkButton from '../../layout/linkButton/LinkButton';
import RequesteApi from '../../request/RequestApi';
import Loading from '../../layout/loading/Loading';
import ConfirmDialog from '../../layout/confirmDialog/ConfirmDialog';

function Project() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const location = useLocation();

  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  const handleRequestComplete = () => {
    setRemoveLoading(true);
  };

  const handleDeleteProject = () => {
    setShowConfirmDialog(true);
  };

  const confirmDelete = () => {
    setShowConfirmDialog(false);
    // Lógica para deletar o projeto
    console.log("Projeto deletado");
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <LinkButton to="/newProject" text="Create Project" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container custoClasse="start">
        {!removeLoading && <Loading />}
        <RequesteApi onRequestComplete={handleRequestComplete} />
        <button onClick={handleDeleteProject}>Deletar Projeto</button>
      </Container>
      {showConfirmDialog && (
        <ConfirmDialog
          message="Você tem certeza que deseja deletar este projeto?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default Project;
