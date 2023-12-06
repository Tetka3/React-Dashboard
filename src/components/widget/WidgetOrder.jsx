import "./widget.scss";
import { NavLink } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


const WidgetOrder = () => {  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">ORDERS</span>
        <span className="counter">20</span>
        <NavLink to="/orders" className="link">View current orders</NavLink>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20 %
        </div>
        <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}/>
      </div>
    </div>
  );
};

export default WidgetOrder;