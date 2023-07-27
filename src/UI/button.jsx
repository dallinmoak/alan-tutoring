'use client'

export default function Button({action, children}){
  return(
    <button className="p-3 rounded-lg bg-dark-shades-lighter dark:bg-light-shades-darker hover:bg-dark-shades- dark:hover:bg-light-shades- text-light-shades- dark:text-dark-shades- " onClick={action}>
      {children}
    </button>
  )
}