import "./widget.scss";
import { NavLink } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


const WidgetEarning = () => {  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">EARNING</span>
        <span className="counter">$1,200</span>
        <NavLink to="/earnings" className="link">View net earnings</NavLink>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20 %
        </div>
        <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}/>
      </div>
    </div>
  );
};

export default WidgetEarning;