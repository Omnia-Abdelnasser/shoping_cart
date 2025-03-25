import { useCart } from "react-use-cart";

const Nav = ({ setShowCart }) => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar navbar-dark bg-dark d-flex justify-content-center w-80" style={{width:'50%',margin:'auto'}}>
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand text-white" href="/">🛍️ ShopEasy</a>

        <button 
          className="btn position-relative ms-3" 
          onClick={() => setShowCart(prev => !prev)}
        >
          <i className="fas fa-shopping-cart text-white fs-4"></i>
          {totalItems > 0 && (
            <span 
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style={{ fontSize: "0.7rem" }}
            >
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
