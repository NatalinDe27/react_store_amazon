import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Main_style.css';

const Main = () => {
    const [products, setProducts] = useState(null);
    const fetchData = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
            <div className="products">
                    {products &&
                        products.map((product, index) => {

                            return (
                                <div className="product" key={index}>
                                    <div className="img_products">
                                        <img src={product.image} alt={product.title}/>
                                    </div>
                                    <div className="details">
                                        {/*<p>{product.description}</p>*/}
                                        <h3> {product.title}</h3>
                                        <p>${product.price} </p>
                                    </div>
                                </div>
                            );
                        })}
            </div>
    );
};

export default Main;


