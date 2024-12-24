import { Card } from "../components/Card/Card"
import { Header } from "../components/Header/Header"
import { productsList } from "../constants"

export const Home = () => {
    return(
        <>
            <Header />
            
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" placeholder="Поиск по объявлениям" />
                            <button className="btn btn-primary search-btn">
                                <img className="search-btn__icon" src="/images/search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main__title">Рекомендации для вас</h2>
                                <div className="content-main__list">
                                    {
                                        productsList.map(pruduct => (
                                            <Card
                                                key={pruduct.id}
                                                title={pruduct.title}
                                                price={pruduct.price}
                                                address={pruduct.address}
                                                date={pruduct.date}
                                                img={pruduct.img}
                                                url={pruduct.url}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="content-side">
                                <h3 className="content-side__title">Сервисы и услуги</h3>
                                <div className="content-side__box">
                                    <div className="content-side__list">
                                        
                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/images/track.svg" alt="track"/>
                                            <h5 className="content-side__list-item--title">
                                                Доставка
                                            </h5>
                                            <p className="content-side__list-item--text">
                                                Проверка при получении и возможность бесплатно вернуть товар
                                            </p>
                                        </div>

                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/images/sedan.svg" alt="sedan" />
                                            <h5 className="content-side__list-item--title">
                                                Автотека
                                            </h5>
                                            <p className="content-side__list-item--text">
                                                Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                                            </p>
                                        </div>

                                        <div className="content-side__list-item">
                                            <img className="content-side__list-item--img" src="/images/love.svg" alt="love" />
                                            <h5 className="content-side__list-item--title">
                                                Онлайн-бронирование жилья
                                            </h5>
                                            <p className="content-side__list-item--text">
                                                Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className="content-side__footer">
                                    <div className="content-side__footer-item">© ООО «Абито», 2011–2021</div>
                                    <a href="#!" className="content-side__footer-item">Политика конфиденциальности</a>
                                    <a href="#!" className="content-side__footer-item">Обработка данных</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}