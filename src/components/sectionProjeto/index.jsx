import Card from "./card";
import solucaoImg from '../../assets/image/solucaoImg.png'

function SectionProjeto() {
    return ( 
        <div className="mx-8">
            <h2 className="text-azulMahindra font-extrabold text-5xl my-[5rem]">Entendendo o projeto</h2>
            <div className="flex justify-between items-center gap-5">
                <Card
                    img={solucaoImg}
                    title={'Afinal, o que vamos solucionar?'}
                    description={'Todos têm conhecimento sobre corridas de carros tradicionais, movidos a combustão. Mas o principal ponto é: nem todos sabem o que é a Fórmula E. O desenvolvimento de carros elétricos está aumentando e, com isso, queremos que a popularização siga o mesmo caminho de ascensão.'}
                />
                <Card
                    img={solucaoImg}
                    title={'Afinal, o que vamos solucionar?'}
                    description={'Todos têm conhecimento sobre corridas de carros tradicionais, movidos a combustão. Mas o principal ponto é: nem todos sabem o que é a Fórmula E. O desenvolvimento de carros elétricos está aumentando e, com isso, queremos que a popularização siga o mesmo caminho de ascensão.'}
                />
                <Card
                    img={solucaoImg}
                    title={'Afinal, o que vamos solucionar?'}
                    description={'Todos têm conhecimento sobre corridas de carros tradicionais, movidos a combustão. Mas o principal ponto é: nem todos sabem o que é a Fórmula E. O desenvolvimento de carros elétricos está aumentando e, com isso, queremos que a popularização siga o mesmo caminho de ascensão.'}
                />
            </div>
        </div>
     );
}

export default SectionProjeto;