import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  padding: 1rem 1rem 1rem 2rem;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

function Products({ category, filters }) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key] === value)
        )
      );
  }, [category, filters]);

  return (
    <Container>
      {!category && <Title>Popular products</Title>}

      <Wrapper>
        {category
          ? filteredProducts.map((item) => (
              <Product item={item} key={item._id} />
            ))
          : products
              .sort(() => 0.5 - Math.random())
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)}
      </Wrapper>
    </Container>
  );
}

export default Products;
