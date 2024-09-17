function Card({ img, title, description }) {
    return ( 
        <div className="border-2 border-azulMahindra rounded-2xl p-3">
            <img src={img} alt="" className="rounded-xl" />
            <h4 className="text-2xl font-bold text-center text-azulMahindra my-5">{title}</h4>
            <p className="mx-5 text-center">{description}</p>
        </div>
     );
}

export default Card; 