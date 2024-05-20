function ProjectForm(){
  return(
    <form >
      <div>
        <input type="text" placeholder="Insert Project Name:" />
      </div>
      <div>
        <input type="number" placeholder="Insert Project Price" />
      </div>
      <div>
        <select name="category_id">
          <option disable selected>
            Select Category
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Create Project" />
      </div>
    </form>
  )
}

export default ProjectForm;