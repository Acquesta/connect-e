import CardPontos from "./CardPontos";
import Linha from "./Linha";

function HomeQuizzes({ title, pontos }) {
    return ( 
        <div className=" flex flex-col justify-evenly items-center">
            <h2 className="text-3xl">{title} <span className="text-azulMahindra">{pontos}</span></h2>
            <div className="ml-10">
                <Linha 
                    className = 'w-full animate-[animationLine_10s_ease-in]'
                />
            </div>
            <button className="bg-azulMahindra w-[90%] mx-auto my-6 py-2 text-branco text-2xl font-bold rounded-md ">JOGAR</button>
            <CardPontos 
                pontos={pontos}
            />
        </div>
     );
}

export default HomeQuizzes;