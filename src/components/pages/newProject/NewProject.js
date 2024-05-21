import { useNavigate } from 'react-router-dom';

import ProjectForm from '../../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject(){

  const history = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
      history('/project', { message: 'Projeto criado com sucesso!' })
      })
  }

  return (
    <div className={styles.newProject_container}>
      <h1>New Project</h1>
      <p>Create your new Project now!</p>
      <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
    </div>
  );
}

export default NewProject;