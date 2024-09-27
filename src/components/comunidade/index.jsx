import { useParams } from "react-router-dom";
import ComunidadeTop from "./comunidadeTop/comunidadeTop";
import InputsRank from "./inputsRank";
import ComunidadeRanks from "./comunidadeRanksAmigos";
import { useEffect, useState } from "react";

function SectionComunidade() {

    const { id } = useParams();

    const usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    const usuario = usuarios.find(usuario => usuario.id == id)

    const [showPesquisa, setShowPesquisa] = useState('block')
    const [mostraUsuarios, setMostraUsuarios] = useState()

    const [userPedidos, setUserPedidos] = useState([])


    function mostraPesquisa(value) {
        // console.log(value);
        if(value == ''){
            setShowPesquisa('block')
        }
        else{
            setShowPesquisa('hidden')
        }
        procuraUsuario(value)
    }

    function procuraUsuario(nomeUsuario){
        let usuariosAchados = usuarios.filter(usuario => (usuario.nome.toLowerCase().includes(nomeUsuario.toLowerCase())));
        // const usuario = usuarios.find(usuario => usuario.nome == nomeUsuario)
        console.log(usuariosAchados);
        setMostraUsuarios(usuariosAchados)
    }

    function mandaSolicitacao(idUsuario){
        const user = usuarios.find(user => user.id == idUsuario)
        user.amigos.pedidos.push(usuario.id)
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
    }    

    return ( 
        <>
            <ComunidadeTop
                usuario={usuario}
                funcaoMostraPesquisa={mostraPesquisa}
                mostraPesquisa={showPesquisa}
                procuraUsuario={procuraUsuario}
                usuariosAchados={mostraUsuarios}
                mandaSolicitacao={mandaSolicitacao}
                pedidos={usuario.amigos.pedidos}
            />
            <InputsRank />
            <ComunidadeRanks />

        </>
     );
}

export default SectionComunidade;