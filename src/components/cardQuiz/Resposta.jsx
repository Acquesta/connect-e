import { useEffect, useState } from "react";

function Resposta({ resposta, correta = false, funcao}) {

    const [corFonte, setFonte] = useState('preto')
    const [corFundo, setFundo]  = useState('branco')

    useEffect(() => {
        if(correta){
            console.log(`Mudou ${resposta}`);
            setFonte('branco') 
            setFundo('correta')
        } 
    })

    return ( 
        <>
            <div onClick={() => {funcao(resposta)}} className={`flex justify-between items-center w-[30vw] bg-${corFundo} border-${corFonte} border-2 px-3 py-3 rounded-2xl hover:cursor-pointer`}>
                <div className={`w-[4vw] h-[4vw] border-${corFonte} border-2 rounded-full`}>
                </div>
                <p className={`text-${corFonte} `}>{resposta}</p>
            </div>
        </>
     );
}

export default Resposta;