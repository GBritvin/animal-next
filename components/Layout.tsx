import styles from "../styles/Layout.module.css";
import { NavbarSimple } from "./NavbarSimple";
import HeaderSearch from "./HeaderSearch";
import { useState } from "react";

const Layout = ({ children }: any) => {
  const [open, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!open);
  };

  const links = [
    {
      link: "/about",
      label: "О компании",
    },
    {
      link: "/pricing",
      label: "Цены",
    },
    {
      link: "/learn",
      label: "Инфо",
    },
    {
      link: "/community",
      label: "Сообщество",
    },
  ];

  return (
    <>
      {open ? <NavbarSimple /> : null}
      <main className={styles.main}>
        <HeaderSearch links={links} toggleMenu={toggleMenu} />
        <div className={styles.content}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
