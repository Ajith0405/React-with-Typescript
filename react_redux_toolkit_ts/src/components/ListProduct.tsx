import React from "react";
import "./listProduct.css";
import { useAppSelector } from "../Store/store";
import { useAppDispatch } from "../Store/store";
import { deleteProduct } from "../Store/Features/productSlice";
import {deleteCartProduct} from '../Store/Features/cartSlice'
import { addToCart } from "../Store/Features/cartSlice";
// import { SlBasket } from "react-icons/sl";
import { FaShoppingCart } from 'react-icons/fa';

const ListProduct = () => {
  const products = useAppSelector((state) => state.product.products);
  const cartProducts = useAppSelector(
    (state) => state.cartProducts.cartProducts
  );
  const dispatch = useAppDispatch();

  const handleDelete = (pId: string) => {
    dispatch(deleteProduct(pId)); // Dispatch deleteProduct action with pId as payload
  };

  const handleAddCart = (pId: string) => {
    const cartProdToAdd = products.find((prd) => prd.pId === pId);
    if (cartProdToAdd) {
      dispatch(addToCart(cartProdToAdd));
    }
  };

  const handleCartDelete =(pId:string)=>{
      if(pId){
        dispatch(deleteCartProduct(pId));
      }
  }

  return (
    <div className="conatiner-fluid mt-3 mb-3">
      <div className="mx-auto w-75">
        <div className="d-flex justify-content-around text-center bg-warning text-dark p-3 rounded-3">
          <div>
            <h3 className="">All Products List</h3>
          </div>
          <div>
            <div className="basket_icon">
              <div className="cart_icon_btn">
                    <FaShoppingCart fontSize={"30px"}   data-bs-toggle="modal" data-bs-target="#exampleModal" />
              </div>
              

              <div className="cartCount">
                <p className="cartCountPara">{cartProducts.length}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {products
            ? products.map((prd) => {
                return (
                  <div
                    key={prd.pId}
                    className="card me-1 mt-2 col-4 card_box"
                    style={{ width: "18rem" }}
                  >
                    <button
                      className="product_cls_btn"
                      onClick={() => handleDelete(prd.pId)}
                    >
                      X
                    </button>
                    <div className="" style={{ minHeight: "252px" }}>
                      <img
                        src={prd.pImg}
                        className="card-img-top my-1"
                        alt="..."
                      />
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">{prd.pName}</h4>
                      <h5 className="card-title">₹ {prd.pPrice}</h5>
                      <p className="card-text">{prd.pDescription}</p>
                    </div>
                    <div className="d-flex justify-content-around mb-2">
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => handleAddCart(prd.pId)}
                      >
                        Add to Cart
                      </button>
                      <button type="button" className="btn btn-success">
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Cart Items
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    {cartProducts
                      ? cartProducts.map((prd) => {
                          return (
                            <div
                              key={prd.pId}
                              className="card me-1 mt-2 col-4 card_box"
                              style={{ width: "18rem" }}
                            >
                              <button
                                className="product_cls_btn"
                                onClick={() => handleCartDelete(prd.pId)}
                              >
                                X
                              </button>
                              <div className="" style={{ minHeight: "252px" }}>
                                <img
                                  src={prd.pImg}
                                  className="card-img-top my-1"
                                  alt="..."
                                />
                              </div>
                              <div className="card-body">
                                <h4 className="card-title">{prd.pName}</h4>
                                <h5 className="card-title">₹ {prd.pPrice}</h5>
                                <p className="card-text">{prd.pDescription}</p>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
