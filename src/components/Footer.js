import React from "react";
import styled from "styled-components";
import { colors } from "../utils/theme";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.footerBlue};
  padding: 20px 50px;
`;

const Text = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 400;
`;

const Footer = () => {
  return (
    <Container>
      <Text>Zürich Nägel</Text>
      <Text>Appitalstrasse 20, 8804, Au, ZH</Text>
      <Text>renate.fierz@bluewin.ch</Text>
    </Container>
  );
};

export default Footer;
