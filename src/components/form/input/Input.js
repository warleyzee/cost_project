import style from './Input.module.css';

function Input({type, text, name, placeholder, handleOnChancge, value}){
  return(
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <input 
        type={type}
        name={name} 
        id={name}
        placeholder={placeholder}
        onChancge={handleOnChancge}
        value={value}
      />
    </div>
  )
}

export default Input;