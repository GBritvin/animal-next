import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>burger</div>
      <input type="text" placeholder="search" />
      <div>Username</div>
    </header>
  );
};

export default Header;
