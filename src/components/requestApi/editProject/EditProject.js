import { parse, v4 as uuidv4 } from 'uuid';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styles from './EditProject.module.css';
import Loading from '../../layout/loading/Loading';
import Container from '../../layout/container/container';
import ProjectForm from '../../project/ProjectForm';
import Message from '../../layout/message/Message';
import ServiceForm from '../../form/serviceForm/ServiceForm';


function EditProject() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([])
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
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
          setServices(data.services)
        })
        .catch((err) => console.log(err))
    }, 2000);
  }, [id])

  function editPost(project) {
    setMessage('');
    if (project.price < project.cost) {
      setMessage('The budget cannot be greater than the cost of the project')
      setType('error')
      return false
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then((data) => {
        setProject(data)
        setShowProjectForm(false)

        setMessage('UPDATE PROJECT!')
        setType('success')

      })
      .catch((err) => console.log(err))
  }

  function createService(project){
    
    const lastService = project.services[project.services.length -1]
    console.log(`Esse é o último serviço: ${JSON.stringify(lastService)}`);
    console.log(`Esse e o ultimo service ${project.cost}`);
    
    lastService.id = uuidv4();

    const lastServiceCost = lastService.Cost
    console.log(`Essa e a variavel lastServiceCost: ${lastServiceCost}`)
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
    console.log(`Essa e a variavel newCost ${newCost}, valor do projeto: ${project.price}`)

    if (newCost > parseFloat(project.price)) {
      setMessage('Orçamento ultrapassado, verifique o valor do serviço!')
      setType('error')
      project.services.pop()
      return false
    } else {
      setMessage('Service ADD!')
      setType('success')
    }

    project.cost = newCost;
    fetch(`http://localhost:5000/projects/${project.id}`,{
      method: 'PATCH',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) =>{
      //show services
      // console.log(`esse e o service ${JSON.stringify(data)}`)
    })
    .catch((err) => console.log(err))

  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm() {
    // console.log(`Esse e o ultimo service ${project.cost}`);
    // console.log(`Esse e o VALOR DO PROJETO ${project.price}`);
    setShowServiceForm(!showServiceForm);
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
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
                    btnText="Finish"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Add a Services</h2>
              <button className={styles.btn} onClick={toggleServiceForm}>
                {!showServiceForm ? 'Add Service' : 'Close'}
              </button>
              <div className={styles.info}>
              {showServiceForm && (
                <ServiceForm 
                  handleSubmit={createService}
                  btnText="Add"
                  projectData={project}  
                />
              )}
              </div>
            </div>
            <h2>Services</h2>
            <Container customClass="start">
              <p>Itens Services</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Loading />
      )}

    </>
  )
}

export default EditProject;