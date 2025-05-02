import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="home" to="/">Home</Link>
      <Link className="products" to="products">Products</Link>
      <Link className="cart" to="cart">Cart</Link>
      <Link className="cart" to="cart">CartSymbol</Link>
    </div>
  )
}

export default NavBar
//TDL