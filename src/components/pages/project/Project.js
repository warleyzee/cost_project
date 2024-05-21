import { useLocation } from 'react-router-dom'

import Message from '../../layout/message/Message';
import styles from './Project.module.css';
import Container from '../../layout/container/container';
import LinkButton from '../../layout/linkButton/LinkButton';

function Project(){

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>My Projects</h1>
        <LinkButton to="/newProject" text="Create Project" />
      </div>
        {message && <Message type="success" msg={message} />}
        <Container custoClasse="start">
          <p>Project</p>

        </Container>
    </div>
  );
}

export default Project;