import Card from "./card";
import solucaoImg from '../../assets/image/solucaoImg.png'

const cardSolucao = [
    {
        img: solucaoImg,
        title: 'Afinal, o que vamos solucionar?',
        description: 'Todos têm conhecimento sobre corridas de carros tradicionais, movidos a combustão. Mas o principal ponto é: nem todos sabem o que é a Fórmula E. O desenvolvimento de carros elétricos está aumentando e, com isso, queremos que a popularização siga o mesmo caminho de ascensão.'
    },
    {
        img: solucaoImg,
        title: 'Nossa solução',
        description: 'Consiste em quizzes com perguntas relacionadas a Fórmula E, carros e os cenários gerais, com rankings de pontuações com outras pessoas e premiações.'
    },
    {
        img: solucaoImg,
        title: 'Por que faremos isso?',
        description: 'A gamificação é atrativa para todos os públicos por seu dinamismo. Pensando nisso, estimular as pessoas a se entreterem com quizzes, enquanto adquirem conhecimento sobre a Fórmula E, disputam rankings e ganham pontos e prêmios, pode despertar a curiosidade do público em geral.'
    },
]

function SectionProjeto() {
    return ( 
        <div className="mx-8">
            <h2 className="text-azulMahindra font-extrabold text-5xl my-[5rem]">Entendendo o projeto</h2>
            <div className="flex justify-between items-center gap-5">
                <Card
                    img={solucaoImg}
                    title={''}
                    description={''}
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