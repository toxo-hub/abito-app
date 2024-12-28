import { useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";
import { Service } from "../components/Service/Service";
import { servicesList } from "../constants";

export const Home = () => {
  const {products} = useOutletContext();
    
  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main__title">Рекомендации для вас</h2>
            <div className="content-main__list">
              {products.map((pruduct) => (
                <Card
                  key={pruduct.id}
                  title={pruduct.title}
                  price={pruduct.price}
                  address={pruduct.address}
                  date={pruduct.date}
                  img={pruduct.img}
                  url={pruduct.url}
                />
              ))}
            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side__title">Сервисы и услуги</h3>
            <div className="content-side__box">
              <div className="content-side__list">
                {servicesList.map((service) => (
                  <Service
                    key={service.code}
                    img={service.img}
                    title={service.title}
                    text={service.text}
                  />
                ))}
              </div>
            </div>
            <div className="content-side__footer">
              <div className="content-side__footer-item">
                © ООО «Абито», 2011–2021
              </div>
              <a href="#!" className="content-side__footer-item">
                Политика конфиденциальности
              </a>
              <a href="#!" className="content-side__footer-item">
                Обработка данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
