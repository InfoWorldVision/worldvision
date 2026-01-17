import { Link } from "react-router-dom";
import { PRODUCTS_DATA } from "../Data/products";

const Navbar = () => (
   <nav className="navbar">
      <Link to={`/`}>Home</Link>
      <ul>
         <li>
            Our Products
            <ul className="dropdown">
               {PRODUCTS_DATA.map(item => (
                  <li key={item.id}>
                     <Link to={`/our-products/${item.id}`}>
                        {item.name}
                     </Link>
                  </li>
               ))}
            </ul>
         </li>
      </ul>
   </nav>
);

export default Navbar;
