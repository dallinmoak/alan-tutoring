'use client'

export default function Message({type, children}){
  const classes = {
    error: "text-danger-darker dark:text-danger- font-semibold",
    info: "",
    success: "text-success-darker dark:text-success- font-semibold"
  }
  return(
    <div className={classes[type]}>
      {children}
    </div>
  )
}