import ProjectForm from '../../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject(){
  return (
    <div className={styles.newProject_container}>
      <h1>New Project</h1>
      <p>Create your new Project now!</p>
      <ProjectForm />
    </div>
  );
}

export default NewProject;