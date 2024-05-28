import styles from './EditProject.module.css';
import Loading from '../../layout/loading/Loading';
import Container from '../../layout/container/container'
import ProjectForm from '../../project/ProjectForm'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function EditProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data)
        })
        .catch((err) => console.log(err))
    }, 2000);
  }, [id])

  function editPost(project){
    console.log(project, project.name, project.price, project.category)
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            <div className={styles.details_container}>
              <h1>{project.name}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Edit Project' : 'Close'}
              </button>
              {!showProjectForm ? (
                <div className={styles.info}>
                  <p>
                    <span>Category:</span> {project.category.name}
                  </p>
                  <p>
                    <span>Budget:</span> €{project.price}
                  </p>
                  <p>
                    <span>Cost:</span> €{project.cost}
                  </p>
                </div>
              ) : (
                <div className={styles.info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
          </Container>
        </div>
      ) : (
        <Loading />
      )}

    </>
  )
}

export default EditProject;