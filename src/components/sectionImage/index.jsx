import Seta from '../../assets/icons/seta.svg'

function SectionImage({src}) {    
    return ( 
        <div className='h-[90vh] w-auto bg-cover bg-center flex flex-col items-center justify-center' style={{backgroundImage: `linear-gradient(rgba(0,0,0, .1), rgba(0,0,0, .6)), url(${src})` }}>
            <h1 className="uppercase font-bold text-8xl text-branco ">Sobre nós</h1>
            <div className="animate-[bounce_2s_ease-in-out_infinite] delay-700 h-[102px] w-[102px] bg-gradient-to-r from-azulMahindra to-[#0000A8] rounded-full mt-14 flex items-center justify-center cursor-pointer">
                <img src={Seta} alt=""/>
            </div>
        </div>
     );
}

export default SectionImage;