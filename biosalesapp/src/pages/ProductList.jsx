import styled from "styled-components";
import Navbar from "../components/NavbarMain";
// import Announcement from "../components/Announcement";
import Products from "../components/Products";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  text-transform: capitalize;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  // const [sort, setSort] = useState("newest");
  const [subCatFilter, setSubCatFilter] = useState([]);

  useEffect(() => {
    if (!!category) {
      setFilters({ category: `${category}` });
    }
  }, [category]);

  const handleFilters = (e) => {
    let value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    if (category === "yoghurt") {
      setSubCatFilter([
        "black cup",
        "greek",
        "fruits on the bottom",
        "coconut",
        "probiotic",
        "tinga tinga",
        "tinga tinga (drink)",
      ]);
    } else if (category === "milk") {
      setSubCatFilter(["fresh", "long life"]);
    } else if (category === "cream") {
      setSubCatFilter(["whipping cream", "cooking cream"]);
    } else if (category === "butter") {
      setSubCatFilter([]);
    } else if (category === "ma-cuisine") {
      setSubCatFilter(["jams", "sauces", "mayonnaise", "chutney"]);
    } else if (category === "cheese") {
      setSubCatFilter(["hard", "soft"]);
    }
  }, [category]);

  return (
    <Container>
      {/* <Announcement /> */}
      <Navbar />

      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="sub_category" onChange={handleFilters}>
            <Option selected disabled>
              Subcategory
            </Option>
            {subCatFilter.map((item) => (
              <Option key={subCatFilter.indexOf(item)}>{item}</Option>
            ))}
          </Select>
        </Filter>
        {/* <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest" selected disabled>
              Newest
            </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter> */}
      </FilterContainer>
      <Products category={category} filters={filters} />
      {/* <Newsletter /> */}
      <Footer />
    </Container>
  );
};

export default ProductList;
