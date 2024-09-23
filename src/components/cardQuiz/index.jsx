function CardQuiz({ quizzes }) {
    return ( 
        <div className="w-[80vw] h-[50vw] shadow-2xl mx-auto my-[2vw] pt-4 flex flex-col justify-evenly">
            <h2 className="text-center text-[4vw] ">Questão 1</h2>
            <div className="w-full h-1 bg-azulMahindra"></div>
            <h3 className="text-center text-[3vw]">Qual foi o primeiro campeão da Fórmula E?</h3>
            <div className="p-10 flex flex-wrap justify-between gap-6">
                <div className="flex justify-between items-center w-[30vw] border-preto border-2 px-3 py-3 rounded-2xl hover:cursor-pointer hover:bg-preto hover:bg-opacity-10">
                    <div className="w-[4vw] h-[4vw] border-preto border-2 rounded-full">
                    </div>
                    <p>Jean-Éric Vergne</p>
                </div>
                <div className="flex justify-between items-center w-[30vw] border-preto border-2 px-3 py-3 rounded-2xl hover:cursor-pointer hover:bg-preto hover:bg-opacity-10">
                    <div className="w-[4vw] h-[4vw] border-preto border-2 rounded-full">
                    </div>
                    <p>Jean-Éric Vergne</p>
                </div>
                <div className="flex justify-between items-center w-[30vw] border-preto border-2 px-3 py-3 rounded-2xl hover:cursor-pointer hover:bg-preto hover:bg-opacity-10">
                    <div className="w-[4vw] h-[4vw] border-preto border-2 rounded-full">
                    </div>
                    <p>Jean-Éric Vergne</p>
                </div>
                <div className="flex justify-between items-center w-[30vw] border-preto border-2 px-3 py-3 rounded-2xl hover:cursor-pointer hover:bg-preto hover:bg-opacity-10">
                    <div className="w-[4vw] h-[4vw] border-preto border-2 rounded-full">
                    </div>
                    <p>Jean-Éric Vergne</p>
                </div>
            </div>
            <button className="bg-azulMahindra text-branco mx-auto px-12 py-3 rounded-xl">CONTINUAR</button>
        </div>
     );
}

export default CardQuiz;