import React from "react";
import KS_logo from "./KS_logo.png";
import Logout from "./Logout.png";
import Replay from "./Reply.png";
import Typography from "@material-ui/core/Typography";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="exit" alt="logo" src={Logout} />
      </div>
      <div>
        <img className="logo" alt="logo" src={KS_logo} />
        <h1>KamSafer</h1>
      </div>
    </div>
  );
};
export default Header;
