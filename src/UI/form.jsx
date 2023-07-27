'use client'

export default function Form({ submitAction, children }){
  return(
    <form className="flex flex-col gap-4 max-w-lg mx-auto" onSubmit={submitAction}>
      {children}
    </form>
  )
}