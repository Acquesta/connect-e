function Card({ img, title, description }) {
    return ( 
        <div className="border-2 border-azulMahindra rounded-2xl p-3">
            <img src={img} alt="" className="rounded-xl" />
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
     );
}

export default Card; 