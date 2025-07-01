import axios from "axios";
import { useEffect, useState } from "react";
import type { Product as ProductType } from "./BestSellers.tsx";
import rating from "./assets/img/rating.svg";
import cartWhite from "./assets/img/cartWhite.svg";

export const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    axios
      .get("https://masterclass.kimitsu.it-incubator.io/api/products/1")
      .then((res) => {
        const product = res.data;
        setProduct(product);
      });
  }, []);

  if (product === null) {
    return <h2>Продукт еще грузится ...</h2>;
  }

  return (
    <div>
      <div>Заглушка. Понадобится чуть позже</div>

      <div className="product">
        <img src={product.image} alt="" />
        <div className="info">
          <p className="title">{product.title}</p>
          <p className="price">$ {product.price}</p>
          <div className="rating">
            <p>Rating: {product.rating.rate}</p>
            <img src={rating} alt="" />
          </div>
          <div className="category">
            <span>Category:</span>
            <p>{product.category}</p>
          </div>
          <p className="description">{product.description}</p>
          <button>
            <img src={cartWhite} alt="" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export type ProductType = {
  _id: string
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: Rating
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Rating {
  rate: number
  count: number
}


export const BestSellers = () => {

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    // Server request when loading the page
    //https://masterclass.kimitsu.it-incubator.io/api/products
    const promise = axios.get('https://masterclass.kimitsu.it-incubator.io/api/products');
    promise.then((res) => {
      const products = res.data;
      setProducts(products);
    })
  }, []);

  
  return (
    <div className="bestSeller">
      <h2>Bestsellers</h2>
      <div className="cards">
        {
          products.map((pr) => {
            return (
              <div className="card" key={pr.id}>
                <img src={pr.image} alt="img" />
                <h4>{pr.title}</h4>
                <p className="price">${pr.price}</p>
                <button>Show more</button>
              </div>
            )
          }

          )
        }  
      </div>
    </div>  
    )
  
  };
  