import { useState, useEffect } from "react";
import Resposta from "./Resposta";

function CardQuiz({ quizzes }) {

    const [questao, setQuestao] = useState(0)

    const [input, setInput] = useState('')

    const quiz = quizzes['questions'][questao]
    // console.log(quiz);

    const respostaClicada = (input) => {
        // console.log(input);
        setInput(input)
        if(input == quiz.answer){
            // console.log('Resposta certa');
            setRespostaUser('correta')
        }if(input != quiz.answer){
            // console.log('resposta errada');
            setRespostaUser('errada')
        }
    }

    return ( 
        <div className="w-[80vw] h-[50vw] shadow-2xl mx-auto my-[2vw] pt-4 flex flex-col justify-evenly">
            <h2 className="text-center text-[4vw] ">Questão {questao + 1}</h2>
            <div className="w-full h-1 bg-azulMahindra"></div>
            <h3 className="text-center text-[3vw]">{quiz.question}</h3>
            <div className="p-10 flex flex-wrap justify-between gap-6">
                {
                    quiz.options.map((resposta) => (
                        <Resposta
                            key={resposta}
                            resposta={resposta}
                            funcao={respostaClicada}
                        />
                    ))
                }
            </div>
            <button className="bg-azulMahindra text-branco mx-auto px-12 py-3 rounded-xl">CONTINUAR</button>
        </div>
     );
}

export default CardQuiz;