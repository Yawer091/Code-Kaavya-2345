export const CardBhawesh = (item) => {
    
    return <>
        <div className="card-b-1">
        <div>
            <img src= {item.image}/>
        </div>
        <p>{item.type}</p>
        <p>{item.name}</p>
        </div>
    </>
}