import Link from "next/link";
import Logo from "./Logo";
import styles from "../styles/NavbarSimple.module.css";

const Navbar = () => {
  return (
    <aside className={styles.navbar}>
      <Logo />
      <nav className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/animals">Animals</Link>
      </nav>
    </aside>
  );
};

export default Navbar;
