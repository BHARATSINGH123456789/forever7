import { CartState } from "../Context/Context";
import "./Home.css"
import React from 'react'
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
    const {
        state: { products },
        productState: { byMale, byFemale, byWhite, byFolded, searchQuery },
    } = CartState();
    console.log(products)

    const transformProducts = () => {
        let sortedProducts = products;

        if (byMale) {
            sortedProducts = sortedProducts.filter((prod) => prod.gender === "M");
        }

        if (byFemale) {
            sortedProducts = sortedProducts.filter((prod) => prod.gender === "F");
        }

        if (byWhite) {
            sortedProducts = sortedProducts.filter((prod) => prod.cat === "W");
        }
        if (byFolded) {
            sortedProducts = sortedProducts.filter((prod) => prod.folded === "Y");
        }

        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
                prod.name.toLowerCase().includes(searchQuery)
            );
        }

        return sortedProducts;
    };

    return (
        <div className="home">
        <Filter/>
        <div className="productContainer">
          {transformProducts().map((prod,key) => (
            <SingleProduct prod={prod} key={key} id={key}/>
          ))}
        </div>
      </div>

    )
}

export default Home