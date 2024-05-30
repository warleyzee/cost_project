import { useState } from 'react';

import Input from '../../form/input/Input';
import SubmitButton from '../../form/button/Button'

import styles from '../../project/ProjectForm.module.css';

function ServiceForm({ handleSubmit, btnText, projectData }) {

  const [service, setService] = useState();

  const submit = (e) => {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
    console.log(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Service Name"
        name="Name"
        placeholder="What's the Services?"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Price"
        name="Cost"
        placeholder="What's the Price?"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Description"
        name="Description"
        placeholder="Tell me more!"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm;