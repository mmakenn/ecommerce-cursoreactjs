import { ItemCount } from '../itemCount/itemCount.js'

export const Item = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.imgLink} className="card-img-top" alt={props.description}/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-price">{props.price}</p>
                <ItemCount />
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    );
}