import "./Inventory.scss";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import React, { useState, useEffect } from "react";

import CardContainerGrid from "../../../../components/cardContainer/CardContainerGrid";

const Inventory = () => {
  const [addProductForm, setAddProductForm] = useState(true);
  const [Products,setProducts] = useState()
  const [MyProducts,setMyProducts] = useState<any>([])
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {

    axios.post("http://localhost:9000/api/myproducts/", {
      userid: auth['userid']
    }).then(({ data }) => {
      setProducts(data.products)
      // console.log(data.products)
      
      axios.post("http://localhost:9000/api/products/list", 
      data.products
    ).then(({ data }) => {
      setMyProducts(data.products)
      console.log(data.products)
    })
    });

  }, []);


  return (
    <div className="std-card m-2">
      <p className="std-font2">INVENTORY</p>
      <div className="std-section"></div>
      <div className="d-flex m-2">
        {/* <div className="input-group">
          <input
            type="text"
            className="std-inputField"
            aria-label="Recipient's username"
          />
          <button className="std-btn std-btnOrange" type="button">
            <FaSearch />
          </button>
        </div> */}
      </div>
      <br />
      {
        MyProducts.length >0 && <div><CardContainerGrid products = {MyProducts} type={"seller"}/></div>
        
      }
      
    </div>
  );
};

export default Inventory;
