import image from '../../assets/image/imagemLogin.png'
import InputEntrada from './inputEntrada/InputEntrada';
import InputSubmit from './inputSubmit/InputSubmit';

function Entrada({ title, inputs}) {
    return ( 
        <div className='bg-branco w-[70vw] h-[60vh] mx-auto my-[102px] p-[20px] flex justify-between drop-shadow-2xl'>

            <img className=' bg-cover bg-center' src={image} alt="" />
            <div className='w-full px-[4rem] py-[2rem] flex flex-col'>
                <h1 className='text-center text-5xl uppercase text-azulMahindra font-bold'>{title}</h1>
                <InputEntrada 
                    label = 'Email'
                    type = 'text'
                />
                <InputEntrada 
                    label = 'Senha'
                    type = 'password'
                    esqueceuSenha = {true}
                />
                <InputSubmit
                    value = 'Entrar'
                />
            </div>
        </div>
     );
}

export default Entrada;