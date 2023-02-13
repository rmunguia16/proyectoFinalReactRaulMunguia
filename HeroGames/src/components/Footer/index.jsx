import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import TW from "../../assets/redes/TW.png";
import Twitch from "../../assets/redes/Twitch.png";
import YouTube from "../../assets/redes/YouTube.png";
import Facebook from "../../assets/redes/Facebook.png";
import Instagram from "../../assets/redes/Instagram.png";


const Footer = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className="col text-center">Desarrollado por Raul Munguia</p>
      </div>

      <div className={styles.redes}>
        <Link to={'https://www.facebook.com/gaming/HeroGamesShop'}>
          <img className={styles.img} src={Facebook} alt="Facebook" />
        </Link>
        <Link to={'https://www.instagram.com/rulink10/'}>
          <img className={styles.img} src={Instagram} alt="Instagram" />
        </Link>
        <Link to={'https://twitter.com/Rulink10'}>
          <img className={styles.img} src={TW} alt="Twitter" />
        </Link>
        <Link to={'https://www.youtube.com/channel/UCFnCqUS76YrJ9YNVRemCbWw'}>
          <img className={styles.img} src={YouTube} alt="YouTube" />
        </Link>
        <Link to={'https://www.twitch.tv/rulink10'}>
          <img className={styles.img} src={Twitch} alt="Twitch" />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Footer);
