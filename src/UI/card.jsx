'use client'

export default function Card({ type = "reg", children }){
  const strings = {
    reg: "bg-light-shades- dark:bg-dark-shades- text-dark-shades- dark:text-light-shades- p-2 rounded-lg",
    inv: "bg-dark-shades-lighter dark:bg-light-shades-darker text-light-shades- dark:text-dark-shades- p-2 rounded-lg",
  }
  return(
    <div className={strings[type]}>
      { children }
    </div>
  )
}