/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { RiDeleteBin6Line } from "react-icons/ri";
import "./Product.css";

const Product = ({ product, deleteItem }) => {
  const {
    productId,
    productName,
    productPrice,
    productQuantity,
    productDescription,
    colors,
  } = product;

  return (
    <>
      <tr>
        <td>{productId}</td>
        <td>{productName}</td>
        <td>{productPrice}</td>
        <td>{productQuantity}</td>
        <td>{productDescription}</td>
        <td>{colors}</td>
        <td onClick={() => deleteItem(productId)}>
          <div className="deleteProduct">
            <RiDeleteBin6Line />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Product;
