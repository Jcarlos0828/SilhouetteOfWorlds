import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  marginTop?: boolean;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, marginTop = true }) => {
  const marginTopClass = marginTop ? "layout-top" : "layout-no-top";
  return <div className={styles[marginTopClass]}>{children}</div>;
};

export default Layout;
