import React from "react";
import Header from "../Header";
import "./index.css";

const AppLayout: React.FC = ({ children }) => (
  <div className="App">
    <Header />
    {children}
  </div>
);

export default AppLayout;
