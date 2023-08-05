import { Badge } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import Person from "@mui/icons-material/Person";
// import Search from "@mui/icons-material/Search";
// import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUp from "@mui/icons-material/ArrowDropUp"
import {
  ArrowDropDown,
  Search,
  Person,
  ArrowDropUp,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 4rem;
  max-height: 4rem;
  background: #f1f1f1;
  padding: 5px 10px;
  ${mobile({ height: "70px", width: "100vw" })}
`;
const Wrapper = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "0 10px" })}
`;

const Center = styled.div`
  max-height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  ${mobile({ display: "none" })}
`;
const Language = styled.span`
  font-size: 14px;
  margin: 0 5px;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.span`
  width: 60%;
  border: 1px solid lightgray;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 90%;
  height: 2rem;
  ${mobile({ flex: "90%", height: "100%" })}
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  flex: 1;
  text-align: center;
  margin: 0 0 0 1rem;
  ${mobile({ flex: 2, textAlign: "left" })}
`;

const LogoImage = styled.img`
  height: 55px;
  width: 60px;
`;

const Right = styled.div`
  max-height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem 0 0;
  ${mobile({ justifyContent: "center", flex: 1, marginRight: "10px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding-left: 10px;
  ${mobile({ fontSize: "12px" })}
`;

const UserAuth = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 2;
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-height: 100px;
  background-color: #f1f1f1;
  position: absolute;
  margin-right: 1rem;
  right: 0;
  z-index: 10;
  border-top: none;
  ${mobile({ width: "35%", marginTop: "-15px", marginRight: "45px" })}
`;

const DropLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const DropItem = styled.div`
  display: flex;
  height: "15px";
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
  width: 80%;
  ${mobile({ fontSize: "12px" })}
`;

function Navbar() {
  const user = false;
  const quantity = useSelector((state) => state.cart.quantity);
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Logo> */}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <LogoImage src="https://projectstorageaccount56.blob.core.windows.net/biocontainer/bio-logo-no-strapline-2020.png" />
          </Link>
          {/* </Logo> */}
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <UserAuth onClick={() => setDrop(!drop)}>
            <Person style={{ font: "26px", cursor: "pointer" }} />
            <span>
              {drop ? (
                <ArrowDropUp style={{ cursor: "pointer" }} />
              ) : (
                <ArrowDropDown style={{ cursor: "pointer" }} />
              )}
            </span>
          </UserAuth>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity || 0} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
      {drop && (
        <Dropdown>
          {user ? (
            <DropLinks>
              <DropItem>My account</DropItem>
              <DropItem>My orders</DropItem>
              <DropItem>Promotions</DropItem>
              <DropItem>Help</DropItem>
              <DropItem>
                <button
                  style={{
                    width: "80%",
                    height: "25px",
                    borderRadius: "10px",
                    color: "#111",
                    backgroundColor: "#fff",
                    fontWeight: "500",
                  }}
                  onClick={handleClick}
                >
                  LogOut
                </button>
              </DropItem>
            </DropLinks>
          ) : (
            <DropLinks>
              <DropItem>
                <button
                  onClick={() => navigate("/login")}
                  style={{
                    width: "80%",
                    height: "25px",
                    borderRadius: "10px",
                    color: "#111",
                    backgroundColor: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Sign In
                </button>
              </DropItem>
              <DropItem>
                <button
                  onClick={() => navigate("/register")}
                  style={{
                    width: "80%",
                    height: "25px",
                    borderRadius: "10px",
                    color: "#111",
                    backgroundColor: "#fff",
                    fontWeight: "500",
                  }}
                >
                  Register
                </button>
              </DropItem>
            </DropLinks>
          )}
        </Dropdown>
      )}
    </Container>
  );
}

export default Navbar;
