import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="content-side__footer">
      <div className="content-side__footer-item">© ООО «Абито», 2011–2021</div>
      <Link to="/#!" className="content-side__footer-item">
        Политика конфиденциальности
      </Link>
      <Link to="/#!" className="content-side__footer-item">
        Обработка данных
      </Link>
    </div>
  );
};
