import { useEffect, useState } from "react";

function Resposta({ resposta, funcao, corFundo, corFonte}) {

    return ( 
        <>
            <div onClick={() => {funcao(resposta)}} className={`flex justify-between items-center w-[30vw] bg-${corFundo} border-${corFonte} border-2 px-3 py-3 rounded-2xl hover:cursor-pointer shadow-xl`}>
                <div className={`w-[4vw] h-[4vw] border-${corFonte} border-2 rounded-full`}>
                </div>
                <p className={`text-${corFonte} `}>{resposta}</p>
            </div>
        </>
     );
}

export default Resposta;