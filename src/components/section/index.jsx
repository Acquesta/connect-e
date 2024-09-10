function Section({titulo, texto, color = false}) {

    let cor1 = 'azulMahindra'
    let cor2 = 'branco'

    if (color == true){
        cor2 = 'azulMahindra' ;
        cor1 = 'branco';
    }
    
    return ( 
        <div className={`px-20 py-20 bg-${cor2}`} id="#solucao">
            <h2 className={`text-5xl text-center bg-${cor1} py-7 rounded-full text-${cor2} font-bold`}>{titulo}</h2>
            <p className="mt-10 text-2xl text-center text-2xl leading-relaxed" >{texto}</p>
        </div>
     );
}

export default Section;