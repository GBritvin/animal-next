import Image from "next/image";
import styles from "../styles/Layout.module.css";
import logoPic from "../public/логотип.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src={logoPic}
        alt="Siltech Logo"
        layout="fill"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
};

export default Logo;
