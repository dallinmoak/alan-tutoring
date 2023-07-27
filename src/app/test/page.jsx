export default function Test(){
  return(
    <div className="flex flex-col gap-4 max-w-lg mx-auto">
      <div className="mx-auto space-y-4">
        <header className="w-full h-14 bg-main-brand- dark:bg-main-brand-darker flex flex-row justify-center items-center border-b-2 border-b-dark-shades- dark:border-b-light-shades-darker"></header>
        <h1 className="text-dark-shades- font-black text-3xl"></h1>
        test
      </div>
      <div className="flex flex-col items-center">asdf</div>
      <input className="bg-light-shades- dark:bg-dark-shades-darker focus-visible:outline-none focus-visible:bg-light-shades-darker  focus-visible:dark:bg-dark-shades- border-b border-b-dark-shades- dark:border-b-light-shades- p-1" />
    </div>
  )
}