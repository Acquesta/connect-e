import Amigo from "./Amigo";

function ComunidadeRanksAmigos({ usuarios, amigos }) {

    

    return (
        <div className="w-[90%] mx-auto my-6">
            <h2 className="text-[3vw]">Amigos</h2>
            <div className="border-2 border-azulMahindra rounded-xl mt-10 p-6">
                <ul>
                    <Amigo best/>
                    <Amigo />
                    <Amigo />
                    <Amigo />
                </ul>
            </div>
        </div>
    );
}

export default ComunidadeRanksAmigos;