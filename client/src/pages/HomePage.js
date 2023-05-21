import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload, AiOutlineHeart } from "react-icons/ai";
import { MdArrowForwardIos } from "react-icons/md";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Bosh Sahifa"}>
      {/* banner image */}
        <div className="banner">
          <div className="banner-img">
    <Splide  aria-label="My Favorite Images" options={ {
            rewind: true,
            type: 'loop',
            autoplay: 'play',
            } }>
      <SplideSlide>
        <img src="/images/banner1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner2.jpeg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner3.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner4.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner5.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner6.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="/images/banner7.jpg" alt="Image 2"/>
      </SplideSlide>
   </Splide>
          </div>
        </div>
      <div className="container row mt-3 home-page">
          <div className="title">Mahsulotlar <MdArrowForwardIos/></div>
          <div className="row">
          {products?.map((p) => (
              <div className="col-20"key={p._id}>
                <div className="card">
                  <span className="like">
                    <AiOutlineHeart/>
                  </span>
                <img onClick={() => navigate(`/product/${p.slug}`)} 
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div onClick={() => navigate(`/product/${p.slug}`)}  className="card-name-price">
                    <h5 onClick={() => navigate(`/product/${p.slug}`)}  className="card-title">{p.name.substring(0, 28)}</h5>
                  </div>
                  <h5 onClick={() => navigate(`/product/${p.slug}`)}  className="card-title card-price">
                    <span>Narxi: </span>  {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  <p onClick={() => navigate(`/product/${p.slug}`)}  className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <div className="card-name-price">
                   <button
                      className="add-cart"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Mahsulot karzinkaga qo'shildi");
                      }}
                    >
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" class="bi bi-bag-plus" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                        </svg>
                    </button>
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Yuklash ..."
                ) : (
                  <>
                    {" "}
                    Barchasi  <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
       
      </div>
    </Layout>
  );
};

export default HomePage;
