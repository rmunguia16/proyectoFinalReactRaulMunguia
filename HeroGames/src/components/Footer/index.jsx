import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <p className="col text-center">Desarrollado por Raul Munguia</p>
      </div>

      <div className={styles.redes}>
        <Link to={'https://www.facebook.com/gaming/HeroGamesShop'}>
          <img src="/assets/icons/redes/fb.png" alt="Facebook" />
        </Link>
        <Link to={'https://www.instagram.com/rulink10/'}>
          <img src="/assets/icons/redes/IG.png" alt="Instagram" />
        </Link>
        <Link to={'https://twitter.com/Rulink10'}>
          <img src="/assets/icons/redes/TW.png" alt="Twitter" />
        </Link>
        <Link to={'https://www.youtube.com/channel/UCFnCqUS76YrJ9YNVRemCbWw'}>
          <img src="/assets//icons/redes/yt.png" alt="YouTube" />
        </Link>
        <Link to={'https://www.twitch.tv/rulink10'}>
          <img src="/assets/icons/redes/TTV.png" alt="Twitch" />
        </Link>
      </div>
    </div>
  );
};

export default React.memo(Footer);
