import style from './Select.module.css';

function Select({ text, name, option, handleOnChancge, value}){
  return(
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Select</option>
        {option.map((option) => (
          <option value={option.id} key={option.id}> {option.name} </option>
        ))}
      </select>
    </div>
  )
}

export default Select;