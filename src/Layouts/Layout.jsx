import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useEffect, useState } from "react"
import { productsList } from "../constants";

export const Layout = () => {
    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    const handleSearchBtn = () => {
        setProducts(productsList.filter(product => product.title.toLowerCase().includes(searchText.toLowerCase()) || product.price.includes(searchText)))
    }

    useEffect(() => {
        setProducts(productsList)
    }, [])

    return (
        <>
            <Header/>

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text"
                                   placeholder="Поиск по объявлениям" 
                                   onChange={handleSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={handleSearchBtn}>
                                <img className="search-btn__icon" src="/images/search.svg" alt="search" />
                                <span className="search-btn__text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <Outlet context={{products}}/>
            </main>
        </>
    )
}