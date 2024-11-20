import './Toys.css'

function Toys(props) {
    return (
        <div className="toy-card">
            <img src={props.img} alt={props.title} className="toy-img"/>
            <h2 className="toy-title">{props.title}</h2>
            <p className="toy-text">{props.text}</p>
            <p className="toy-info">{props.info}</p>
            <button className="buy-button">Buy Now!</button>
        </div>  
    );
}

export default Toys;

