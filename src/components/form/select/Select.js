import style from './Select.module.css';

function Select({ text, name, option, handleOnChange, value}){
  return(
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handleOnChange} value={value ||''}>
        <option>Select</option>
        {option.map((option) => (
          <option value={option.id} key={option.id}> {option.name} </option>
        ))}
      </select>
    </div>
  )
}

export default Select;