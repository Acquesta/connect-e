import { NavLink, useNavigate, useParams } from "react-router-dom";
import CardPontos from "./CardPontos";
import Linha from "./Linha";

function HomeQuizzes({ title, pontos }) {

    const navigate = useNavigate()

    const usuarios = JSON.parse(localStorage.getItem("Usuarios"));
    const { id } = useParams()
    // console.log(usuarios)

    const pegaUsuario = () => {
        for(let i = 0; i < usuarios.length; i++){
            if(usuarios[i].id == id){
                return usuarios[i]
            }
        }
        return false
    }

    const usuario = pegaUsuario()

    if(usuario){
        console.log(usuario);
    }
    
    return ( 
        <div className=" flex flex-col justify-evenly items-center">
            <h1 className="text-[4vw] font-bold text-center">Olá {usuario.nome}</h1>
            <h2 className="text-[3vw]">{title} <span className="text-azulMahindra">{pontos}</span></h2>
            <div className="ml-10">
                <Linha 
                    className = 'w-full animate-[animationLine_10s_ease-in]'
                />
            </div>
            <NavLink className="bg-azulMahindra w-[90%] mx-auto my-6 py-2 text-branco text-2xl text-center font-bold rounded-md " to='/quiz/0'>
                JOGAR
            </NavLink>
            <CardPontos 
                pontos={pontos}
            />
        </div>
     );

    
}

export default HomeQuizzes;