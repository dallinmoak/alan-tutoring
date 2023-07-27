'use client'

export default function FormInput(props){
  const { label, name, changeAction, defaultValue, type } = props.info;

  return(
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input className="bg-light-shades- dark:bg-dark-shades- focus-visible:outline-none focus-visible:bg-light-shades-darker  focus-visible:dark:bg-dark-shades-lighter border-b border-b-dark-shades- dark:border-b-light-shades- p-1" name={name} type={type} onChange={(e)=>changeAction(e.target.value)} defaultValue={defaultValue} />
    </div>
  )
}