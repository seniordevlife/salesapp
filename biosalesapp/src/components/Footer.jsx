import React from "react";
import styled from "styled-components";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  Room,
  Phone,
  MailOutline,
  Language,
  Business,
} from "@mui/icons-material";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: #111;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const LogoImg = styled.img`
  width: 150px;
  height: 150px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-bottom: 5rem;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center1 = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Center2 = styled.div`
  flex: 1;
  min-width: 250px;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: #fff;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 5px;
  color: #fff;
`;

const Right = styled.div`
  min-width: 250px;
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: #fff;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>
          <LogoImg src="https://biofoods.co.ke/wp-content/uploads/2020/10/bio-logo-2020.png"></LogoImg>
        </Logo>
      </Left>
      <Center1>
        <Title>Contact Details</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px", color: "#fff" }} />
          Bio Food Products Ltd. <br />
          off Road C, Industrial Area <br />
          after Sameer Industrial Park
        </ContactItem>
        <ContactItem>
          <Business style={{ marginRight: "10px", color: "#fff" }} /> 00506
          Nairobi, Kenya
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px", color: "#fff" }} />{" "}
          info@biofoods.co.ke
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px", color: "#fff" }} /> +254 20 350
          3595-8
        </ContactItem>
        <ContactItem>
          <Language style={{ marginRight: "10px", color: "#fff" }} />{" "}
          www.biofoods.co.ke
        </ContactItem>
      </Center1>
      <Center2>
        <Logo>
          <LogoImg src="https://biofoods.co.ke/wp-content/uploads/2020/11/club-bio-white.png"></LogoImg>
        </Logo>
      </Center2>
      <Right>
        <Title>Follow Us</Title>
        <SocialContainer>
          <SocialIcon color="#1877f2">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#00acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#ff0000">
            <YouTube />
          </SocialIcon>
          <SocialIcon color="#0e76a8">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>

        <Link to="/privacy">
          <Title>Privacy Policy</Title>
        </Link>
      </Right>
    </Container>
  );
}

export default Footer;
