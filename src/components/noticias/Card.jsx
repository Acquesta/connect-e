import { useState } from "react"

function Card({ data, descricao, target = false }) {

  const [progressBar, setProgressBar] = useState('')

  let bgFundo = 'branco'
  let corText = 'azulMahindra'
  let bar = 'hidden'

  if(target){
    bgFundo = 'azulMahindra' 
    corText = 'branco'
    bar = 'block'
  }

  return (
    <div className={`bg-${bgFundo} bg-opacity-75 w-1/4 rounded-xl text-${corText} shadow-xl`}>
      <div className={`${bar} h-2 w-[${progressBar}] bg-branco rounded-t-xl`}></div>
      <div className="px-6 pb-6">
        <p className="mt-3 text-right">{data}</p>
        <h4 className="text-xl font-medium mt-1">{descricao}</h4>
      </div>
    </div>
  );
}

export default Card;
