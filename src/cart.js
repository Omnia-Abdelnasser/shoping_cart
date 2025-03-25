import { useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p className="text-center mt-4">🛒 Your cart is empty!</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center">🛍️ Cart ({totalUniqueItems} items)</h2>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="text-center">
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "50px", borderRadius: "5px" }}
                  />
                </td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="mx-1"
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >
                    ➖
                  </button>
                  <button
                    className="mx-1"
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "14px",
                      cursor: "pointer",
                    }}
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >
                    ➕
                  </button>
                  <button
                    className="mx-1"
                    style={{
                      background: "none",
                      border: "none",
                      fontSize: "14px",
                      color: "red",
                      cursor: "pointer",
                    }}
                    onClick={() => removeItem(item.id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-center mt-3"> Total: ${cartTotal.toFixed(2)}</h3>

      <div className="text-center mt-4">
        <button className="btn btn-danger mx-2" onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <button
          className="btn btn-success mx-2"
          onClick={() => {
            alert(`Purchase successful! Your total is $${cartTotal.toFixed(2)}`);
            emptyCart();
          }}
        >
          ✅ Buy Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
