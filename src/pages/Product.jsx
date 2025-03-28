import { useOutletContext, useParams } from "react-router-dom";
import { servicesList } from "../constants";
import { Service } from "../components/Service/Service";
import { Footer } from "../components/Footer/Footer";

export const Product = () => {
  const { id } = useParams();
  const { products } = useOutletContext();
  const product = products.find((product) => product.id === +id);

  return (
    <section className="content">
      <div className="container">
        {product ? (
          <div className="content-box">
            <div className="content-product">
              <div className="content-product__left">
                <h2 className="content-product__title">{product.title}</h2>

                <img
                  className="content-product__img"
                  src={product.img}
                  alt="product"
                />

                <p className="content-product__text">{product.description}</p>
              </div>
              <div className="content-product__right">
                <h2 className="content-product__price">{product.price}</h2>
                <button className="btn btn-primary btn-large">
                  Показать телефон
                </button>
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
              <Footer/>
            </div>
          </div>
        ) : (
          <h2>Такого товара не существует!</h2>
        )}
      </div>
    </section>
  );
};
