import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Qidiruv natijasi"}>
      <div className="container">
        <div >
          <h1 className="text-center">Qidiruv natijasi</h1>
          <h6 className="text-center">
            {values?.results.length < 1
              ? "Hech qanday mahsulot topilmadi..."
              : `Natija ${values?.results.length}`}
          </h6>
          <div className="row mt-4">
            {values?.results.map((p) => (
              <div className="col-3">
                <div className="card">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <div className="d-flex">
                  <div className="card-text">
                    {p.description.substring(0, 30)}...
                  </div>
                  <div className="card-price"> ${p.price}</div>
                  </div>
                  <button class="btn btn-primary m-1">Batafsil</button>
                  <button class="btn btn-secondary m-1">Savatga qo'shish</button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
