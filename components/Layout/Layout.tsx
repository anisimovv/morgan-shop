import React from "react";
import TopBar from "../TopBar/TopBar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
