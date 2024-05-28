import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './EditProject.module.css';
import Loading from '../../layout/loading/Loading';
import Container from '../../layout/container/container';
import ProjectForm from '../../project/ProjectForm';
import Message from '../../layout/message/Message';


function EditProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

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
     if(project.price < project.cost){
      setMessage('The budget cannot be greater than the cost of the project')
      setType('error')
      return false
     }

     fetch(`http://localhost:5000/projects/${project.id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
    .then(resp => resp.json())
    .then((data) =>{
      setProject(data)
      setShowProjectForm(false)
      //msg
      setMessage('UPDATE PROJECT!')
      setType('success')

    })
    .catch((err) => console.log(err))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message}/>}
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