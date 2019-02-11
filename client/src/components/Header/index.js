import React from "react";
import KS_logo from "./KS_logo.png";
import Exit from "./Exit.png";
import Typography from "@material-ui/core/Typography";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="exit" alt="logo" src={Exit} />
      </div>
      <div>
        <img className="logo" alt="logo" src={KS_logo} />
        <h1>KamSafer</h1>
      </div>
    </div>
  );
};
export default Header;
