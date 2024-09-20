import Entrada from "../components/entrada/Entrada";
import { useNavigate } from "react-router-dom";

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
    }

    const registrarLocal = () => {
        for(let i = 0; i < inputs.length; i++){
            if(inputs[i].value === '') {
                alert('Os campos precisam ser preenchidos');
                return; // Use return para sair da função
            } else if(inputs[3].value !== inputs[4].value) {
                alert('As senhas não são iguais!');
                return; // Use return para sair da função
            }
        }
        
        let usuario = {
            nome: inputs[0].value,
            email: inputs[1].value, 
            nascimento: inputs[2].value, 
            senha: inputs[3].value
        };
    
        if(verificaUsuario(usuario)) {
            alert('Este email já está em uso');
        } else {
            let usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
            usuarios.push(usuario); // Adiciona o novo usuário
            localStorage.setItem('Usuarios', JSON.stringify(usuarios)); // Salva todos os usuários
            navigate(`/quizzes/${inputs[0].id}`);
        }
    }
    
    function verificaUsuario(usuario) {
        let usuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
        for(let i = 0; i < usuarios.length; i++) {
            if(usuario.email === usuarios[i].email) {
                return true; // Email já existe
            }
        }
        return false; // Email não existe
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