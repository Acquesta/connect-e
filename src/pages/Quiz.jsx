import CardQuiz from "../components/cardQuiz";


function Quiz() {

    const quiz_data = {
        questions: [
            {
                'id': 0,
                "question": "Qual foi o primeiro campeão da Fórmula E?",
                "options": [
                    "Jean-Éric Vergne",
                    "Sébastien Buemi",
                    "Lucas di Grassi",
                    "Nelson Piquet Jr."
                ],
                "answer": "Nelson Piquet Jr."
            },
            {
                'id': 1,
                "question": "Qual cidade sediou a primeira corrida da Fórmula E?",
                "options": [
                    "Nova York",
                    "Paris",
                    "Pequim",
                    "Tóquio"
                ],
                "answer": "Pequim"
            },
            {
                'id': 2,
                "question": "Quantas equipes participaram da primeira temporada da Fórmula E?",
                "options": [
                    "8",
                    "10",
                    "12",
                    "14"
                ],
                "answer": "12"
            },
            {
                'id': 3,
                "question": "Qual fabricante forneceu os primeiros motores elétricos para a Fórmula E?",
                "options": [
                    "Audi",
                    "BMW",
                    "Renault",
                    "Jaguar"
                ],
                "answer": "Renault"
            },
            {
                'id': 4,
                "question": "Qual piloto foi o primeiro a vencer duas vezes consecutivas o campeonato da Fórmula E?",
                "options": [
                    "António Félix da Costa",
                    "Jean-Éric Vergne",
                    "Sam Bird",
                    "Stoffel Vandoorne"
                ],
                "answer": "Jean-Éric Vergne"
            },
            {
                'id': 5,
                "question": "Qual equipe venceu o primeiro título de equipes na Fórmula E?",
                "options": [
                    "Audi Sport ABT",
                    "DS Techeetah",
                    "Renault e.dams",
                    "Mahindra Racing"
                ],
                "answer": "Renault e.dams"
            },
            {
                'id': 6,
                "question": "Quantas voltas completas tem uma corrida típica da Fórmula E?",
                "options": [
                    "30",
                    "45 minutos mais uma volta",
                    "60 minutos",
                    "25"
                ],
                "answer": "45 minutos mais uma volta"
            },
            {
                'id': 7,
                "question": "Qual cidade é a sede da FIA, o órgão que regula a Fórmula E?",
                "options": [
                    "Paris",
                    "Londres",
                    "Genebra",
                    "Mônaco"
                ],
                "answer": "Paris"
            },
            {
                'id': 8,
                "question": "Qual temporada da Fórmula E introduziu o 'Attack Mode'?",
                "options": [
                    "Temporada 1",
                    "Temporada 2",
                    "Temporada 5",
                    "Temporada 6"
                ],
                "answer": "Temporada 5"
            },
            {
                'id': 9,
                "question": "Qual piloto detém o recorde de mais vitórias em uma única temporada de Fórmula E?",
                "options": [
                    "Sébastien Buemi",
                    "Lucas di Grassi",
                    "Mitch Evans",
                    "Robin Frijns"
                ],
                "answer": "Sébastien Buemi"
            }
        ]
    }

    return ( 
        <>
            <CardQuiz 
                quizzes={quiz_data}
            />
        </>
     );
}

export default Quiz;