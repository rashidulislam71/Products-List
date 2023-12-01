/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import "./ProductsList.css";
import { useEffect, useState } from "react";
import Product from "./../SingleProduct/Product";

// get Data from local Storage
const getDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("productList");
  return storedData ? JSON.parse(storedData) : [];
};

const ProductsList = () => {
  const [productList, setProductList] = useState(getDataFromLocalStorage());

  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [colors, setColors] = useState("");

  //Set Data LocalStorage
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);

  // Add Product item
  const productsListItem = (e) => {
    e.preventDefault();

    // Product Id Condition same product Id not allowed
    const isProductIdExists = productList.some(
      (product) => product.productId === productId
    );

    if (isProductIdExists) {
      return alert(
        `Already, the product ID has been added. Give another product ID.`
      );
    } else {
      const productObject = {
        productId,
        productName,
        productPrice,
        productQuantity,
        productDescription,
        colors,
      };

      setProductList([...productList, productObject]);
      clearInput();
    }
  };

  // Clear input field
  const clearInput = () => {
    setProductId("");
    setProductName("");
    setProductPrice("");
    setProductQuantity("");
    setProductDescription("");
    setColors("");
  };

  // Delete Product item
  const deleteItem = (id) => {
    const productDelete = productList.filter(
      (product) => product.productId !== id
    );
    setProductList(productDelete);
  };

  // Remove All items
  const removeAllBtn = () => {
    setProductList([]);
  };

  return (
    <div className="main-form">
      <div className="inputProducts">
        <div>
          <h1>Product Information</h1>
        </div>
        <form onSubmit={productsListItem}>
          <label>Product Id:</label>
          <br />
          <input
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            type="text"
            required
          />
          <br />
          <label>Product Name:</label>
          <br />
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            required
          />

          <br />
          <label>Price:</label>
          <br />
          <input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            type="number"
            required
          />

          <br />
          <label>Quantity:</label>
          <br />
          <input
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            type="text"
            required
          />

          <br />
          <label> Description:</label>
          <br />
          <input
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            type="text"
            required
          />

          <br />
          <label>Select Product Color:</label>
          <br />
          <select value={colors} onChange={(e) => setColors(e.target.value)}>
            <option>Select Color</option>
            <option value="Green">Green</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
          </select>

          <button type="submit" className="SubmitBtn">
            Add Product
          </button>
        </form>
      </div>

      <div>
        <div className="productsList">
          <table className="table">
            <tr className="trow">
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Product Color</th>
              <th>Delete</th>
            </tr>
            <tbody>
              {productList.map((product) => (
                <Product
                  product={product}
                  key={product.productId}
                  deleteItem={deleteItem}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="removeall">
          <button onClick={removeAllBtn}>Remove All</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
