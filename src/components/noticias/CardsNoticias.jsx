import React, { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Card from "./Card";

function CardsNoticias() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    const cards = [
        { id: 0, data: '24 de março de 2023', descricao: 'A criação de um circuito de Fórmula E' },
        { id: 1, data: '24 de março de 2023', descricao: 'A criação de um circuito de Fórmula E' },
        { id: 2, data: '24 de março de 2023', descricao: 'A criação de um circuito de Fórmula E' },
        { id: 3, data: '24 de março de 2023', descricao: 'A criação de um circuito de Fórmula E' },
    ];

    const [barWidth, setBarWidth] = useState(0);
    const [cardTarget, setCardTarget] = useState(0);

    useEffect(() => {
        let interval;
        if (inView) {
            setBarWidth(0); 
            progressToNextCard();
            interval = setInterval(progressToNextCard, 10000);
        }
        return () => clearInterval(interval);
    }, [inView]);

    const progressToNextCard = () => {
        setBarWidth(100); 
        setTimeout(() => {
            setCardTarget((prev) => (prev + 1) % cards.length); // Muda o cartão
            setBarWidth(0); 
        }, 9000); 
    };

    return (
        <>
            <div ref={ref} className="mx-8 mt-[-70px] flex gap-4">
                {cards.map((card) => (
                    <Card 
                        key={card.id}
                        data={card.data}
                        descricao={card.descricao}
                        target={card.id === cardTarget}
                        barWidth={barWidth}
                    />
                ))}
            </div>
        </>
    );
}

export default CardsNoticias;
