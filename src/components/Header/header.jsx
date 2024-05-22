import style from "../Header/header.module.css";
import Logo from "../../assets/img/logo-menu.svg";

const Header = () => {
  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.headerLogo}>
          <img src={Logo}></img>
        </div>
        <nav>
          <ul>
            <li className={style.headerPalavras}>
              <a href="#">Home</a>
              <a href="#">Serviços</a>
              <a href="#">Recurso</a>
              <a href="#">Produto</a>
              <a href="#">Depoimento</a>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </nav>
        <div>
          <ul className={style.headerBtn}>
            <li>
              <button className={style.loginBtn}>Login</button>
            </li>
            <li>
              <button className={style.registroBtn}>Registro</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
