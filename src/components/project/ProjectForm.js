import style from './ProjectForm.module.css';
import Input from '../form/input/Input';
import Select from '../form/select/Select';
import Button from '../form/button/Button';

function ProjectForm({ btnText }){
  return(
    <form className={style.form} >
      <Input type="text" text="Project Name" name="name" placeholder="Insert Project Name" />
      <Input type="number" text="Project Price" name="price" placeholder="Insert Project Price" />
      <Select name="category_id" text="Select Category" />
      <Button text={btnText}/>
    </form>
  )
}

export default ProjectForm;