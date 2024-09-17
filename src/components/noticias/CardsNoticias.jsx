import Card from "./Card";

function CardsNoticias() {
    return ( 
        <div className="mx-8 mt-[-70px] flex gap-4">
            <Card 
                data='24 março 2023'
                descricao='A criação de um circuito de Fórmula E'
                target
            />
            <Card 
                data='24 março 2023'
                descricao='A criação de um circuito de Fórmula E'
            />
            <Card 
                data='24 março 2023'
                descricao='A criação de um circuito de Fórmula E'
            />
            <Card 
                data='24 março 2023'
                descricao='A criação de um circuito de Fórmula E'
            />

        </div>
     );
}

export default CardsNoticias;