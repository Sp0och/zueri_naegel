import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styled-components";
// import { useState } from "react";
import { colors } from "../utils/theme.js";

const BorderBox = styledComponents.nav`
  position: relative;
  top: 0px;
  margin: 0 auto;
  z-index: 10;
  width: calc(100% - 40px);
  border-bottom: 1px solid ${(p) => p.color};
`;

const Navbar = styledComponents.div`
  width: calc(100% - 100px);
  height: 140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;

const Section = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const Title = styledComponents.a`
    color: ${(p) => p.color};
    text-decoration: none;
    line-height: 80px;
    font-family: 'Dancing Script', cursive;
    font-size: 80px;
    padding-right: 100px;
    border-right: 2px solid ${(p) => p.color};
  `;

const LinkGroup = styledComponents.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  `;

const Text = styledComponents.a`
  color: ${(p) => p.color};
  text-decoration: none;
  font-size: 36px;
  margin-bottom: -30px;
`;

const Header = ({ color = colors.white }) => {
  return (
    <>
      <BorderBox color={color}>
        <Navbar color={color}>
          <Section color={color}>
            <Title color={color} href="/home">
              Zürich Nägel
            </Title>
          </Section>
          <LinkGroup color={color}>
            <Text color={color} href="/about">
              Über Zürich Nägel
            </Text>

            <Text color={color} href="/contact">
              Kontakt
            </Text>

            <Text color={color} href="/booking">
              Buchen
            </Text>
          </LinkGroup>
        </Navbar>
      </BorderBox>
    </>
  );
};

export default Header;
