import {
  Container,
  Dropdown,
  FormControl,
  Navbar,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { FaShoppingCart } from "react-icons/fa";
import {AiFillDelete} from 'react-icons/ai';

import {useLocation } from 'react-router-dom';

import "./styles.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch
  } = CartState();

  return (
    <Navbar  style={{ height: 80, backgroundColor:"#001D6E" }}>
      <Container>
        <Navbar.Brand style={{fontSize:40,padding:5,borderRadius:20, color:"#a5faf3",backgroundColor:'#020036',fontFamily:'Serif'}}>
          <Link to="/">E-Shop</Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="search a product"
            className="m-auto"
            aria-label="Search"
            onChange={(e)=>{
              productDispatch({
                type:'FILTER_BY_SEARCH',
                payload:e.target.value,
              });
            }}
          />
        </Navbar.Text>

        )}
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 250 }}>
              {cart.length > 0 ? (
                     <>
                     {cart.map((prod) => (
                       <span className="cartitem" key={prod.id}>
                         <img
                           src={prod.image}
                           className="cartItemImg"
                           alt={prod.name}
                         />
                         <div className="cartItemDetail">
                           <span>{prod.name}</span>
                           <span>₹ {prod.price.split(".")[0]}</span>
                         </div>
                         <AiFillDelete
                           fontSize="20px"
                           style={{ cursor: "pointer" }}
                           onClick={() =>
                             dispatch({
                               type: "REMOVE_FROM_CART",
                               payload: prod,
                             })
                           }
                         />
                       </span>
                     ))}
                     <Link to="/cart">
                       <Button style={{ width: "50%", margin: "0 10px" }}>
                         Go To Cart
                       </Button>
                     </Link>
                   </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
