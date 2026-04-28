import React from "react";
import { Styles } from "./stylesMain.js";
const Main = ({ children }) => {
  return (
    <Styles>
      <div className="main--all">{children}</div>
    </Styles>
  );
};

export default Main;
