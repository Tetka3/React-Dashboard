import "./widget.scss";
import { NavLink } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";


const WidgetBalance = () => {  

  return (
    <div className="widget">
      <div className="left">
        <span className="title">BALANCE</span>
        <span className="counter">$100</span>
        <NavLink to="/balance" className="link">View details</NavLink>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20 %
        </div>
        <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }} />
      </div>
    </div>
  );
};

export default WidgetBalance;