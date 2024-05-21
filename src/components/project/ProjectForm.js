import { useState, useEffect } from 'react';

import style from './ProjectForm.module.css';
import Input from '../form/input/Input';
import Select from '../form/select/Select';
import Button from '../form/button/Button';

function ProjectForm({ btnText }){
  const [categories, setCategories] = useState([]);

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

  return(
    <form className={style.form} >
      <Input type="text" text="Project Name" name="name" placeholder="Insert Project Name" />
      <Input type="number" text="Project Price" name="price" placeholder="Insert Project Price" />
      <Select name="category_id" text="Select Category" option={categories} />
      <Button text={btnText}/>
    </form>
  )
}

export default ProjectForm;