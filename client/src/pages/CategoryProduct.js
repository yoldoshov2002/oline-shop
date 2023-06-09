import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <Layout title={'Katalog mahsulot'}>
      <div className="container mt-3 category">
        <h4 className="text-center">Katalog - {category?.name}</h4>
        <h6 className="text-center">{products?.length} ta natija topildi...</h6>
        <div className="row">
              {products?.map((p) => (
                <div className="col-20 " key={p._id}>
                  <div className="card">
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1 card-btn"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        Batafsil
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
