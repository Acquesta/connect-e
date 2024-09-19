import { useState } from "react";
import Entrada from "../components/entrada/Entrada";
import { Navigate, useNavigate } from "react-router-dom";

const inputs = [
    {
        id: 0,
        label: 'Nome de usuário',
        type: 'text',
        value: ''
    },
    {
        id: 1,
        label: 'E-mail',
        type: 'e-mail',
        value: ''
    },
    {
        id: 2,
        label: 'Data de nascimento',
        type: 'date',
        value: ''
    },
    {
        id: 3,
        label: 'Senha',
        type: 'password',
        value: ''
    },
    {
        id: 4,
        label: 'Confirme a senha',
        type: 'password',
        value: ''
    },
] 

function Registrar() {

    const navigate = useNavigate();

    const cadastrarValues = (input, value) => {
        for(let i = 0; i < inputs.length; i++){
            if(input == inputs[i].id){
                inputs[i].value = value
            }
        }
        // console.log(inputs);
    }

    const registrarLocal = () => {
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].value == ''){
                alert('Os campos precisam ser preenchidos')
                break
            }else if(inputs[3].value != inputs[4].value){
                alert('as senhas não são iguais!!!!')
                break
            }else{
                let ususario = [{
                    nome: inputs[0].value,
                    email: inputs[1].value, 
                    nascimento: inputs[2].value, 
                    senha: inputs[3].value
                }]
                verificaUsuario(ususario)
                localStorage.setItem('Usuarios', JSON.stringify(ususario))
                navigate(`/quizzes/${inputs[0].value}`)
            }
        }
    }

    function verificaUsuario(ususario){
        let ususarios = JSON.parse(localStorage.getItem('Usuarios'))
        console.log(ususarios, ususario);
        if(ususarios == null) return true
        for(let i = 0; i < ususarios.length; i++){
            if(ususario[0] == ususarios[i]){
                console.log('tem login ou não tem nada');
                return True
            }
        }
        return true
    }

    return ( 
        <>
            <Entrada 
                title = 'Registrar'
                inputs = {inputs}
                submit = 'Registrar'
                funcaoValues = {cadastrarValues}
                funcaoSubmit = {registrarLocal}
            />
        </>
     );
}

export default Registrar;