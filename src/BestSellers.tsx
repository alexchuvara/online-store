import axios from "axios";
import { useEffect, useState } from "react";
import type { Product as ProductType } from "./BestSellers.tsx";

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
  