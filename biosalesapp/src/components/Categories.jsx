import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  padding: 1rem 1rem 1rem 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  // justtify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

function Categories() {
  return (
    <Container>
      <Title>Product Categories</Title>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Categories;
