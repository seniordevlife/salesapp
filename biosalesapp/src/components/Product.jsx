import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import { addProduct } from "../redux/cartRedux";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 250px;
  max-width: calc(50% - 10px);
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &: hover ${Info} {
    opacity: 1;
  }

  ${mobile({ height: "300px", maxWidth: "100%" })}
`;

const Circle = styled.div`
    width: 200px:
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
  height: 70%;
  z-index: 2;
  max-width: 90%;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.p`
  padding: 10px 10px 0 10px;
`;

const Icon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &: hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addProduct({ ...product, quantity: 1 }));
  };

  return (
    <Container>
      <Circle />
      <Image src={item?.img} />
      <ProductInfo>
        <Text style={{ textAlign: "left", fontWeight: "600" }}>
          {item?.title}
        </Text>
        <Text style={{ textAlign: "right" }}>{item?.price} ksh</Text>
      </ProductInfo>
      <Info>
        <Icon
          onClick={(e) => {
            e.preventDefault();
            addToCart(item);
          }}
        >
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item?._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
