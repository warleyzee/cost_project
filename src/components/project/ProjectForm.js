import { useState, useEffect } from 'react';

import style from './ProjectForm.module.css';
import Input from '../form/input/Input';
import Select from '../form/select/Select';
import Button from '../form/button/Button';

function ProjectForm({ handleSubmit, btnText, projectData }){
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(()=>{
    fetch("http://localhost:5000/categories",{
    method: "GET",
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then((resp) => resp.json())
    .then((data) =>{
      setCategories(data)
    })  
    .catch((err) => console.log(err ))
  }, [])
 
  const submit = (e) =>{
    e.preventDefault()
    handleSubmit(project);
  }

  function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value })
  }

  function handleCategory(e){
    setProject({
      ...project,
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },
   });
  }

  return(
    <form onSubmit={submit} className={style.form} >
      <Input type="text"
        text="Project Name"
        name="name"
        placeholder="Insert Project Name"
        handleOnChange={handleChange}
        value={project.name? project.name: ''}
      />
      <Input type="number" 
        text="Project Price" 
        name="price" 
        placeholder="Insert Project Price" 
        handleOnChange={handleChange}
        value={project.price? project.price: '' } 
      />
      <Select name="category_id"
        text="Select Category"
        option={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id: ''} 
      />
      <Button text={btnText}/>
    </form>
  )
}

export default ProjectForm;