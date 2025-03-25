import { useCart } from "react-use-cart";

const Card = ({ item }) => {
  const { addItem } = useCart();

  return (
    <div className="card shadow-lg rounded-lg p-3 text-center" style={{height:'100%', marginTop:'20px'}}  >
      <img
        src={item.image}
        className="card-img-top"
        alt={item.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted">💲{item.price}</p>
        <button className="btn btn-success" onClick={() => addItem(item)}>
        Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
