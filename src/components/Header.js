import React from "react";
import styledComponents from "styled-components";
import { useState } from "react";

const Navbar = styledComponents.nav`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px 100px;
  border-bottom: 1px solid #000;
  `;

const Section = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: 1px solid red;
  `;

const ToggleSection = styledComponents(Section)`
  display: $props => props.show ? "flex" : "none";
  `;

const Subsection = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  text-align: center;
`;

const Text = styledComponents.a`
  color: #000;
  text-decoration: none;
  font-weight: bold;
`;

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  return (
    <>
      <Navbar>
        <Section>
          <Subsection>
            <Text href="/home">Home</Text>
          </Subsection>
        </Section>

        <Section>
          <Subsection>
            <Text href="/about">About</Text>
          </Subsection>
          {showAbout && (
            <ToggleSection>
              <Text>About2</Text>
            </ToggleSection>
          )}
        </Section>

        <Section>
          <Subsection>
            <Text href="/contact">Contact</Text>
          </Subsection>
          {showContact && (
            <ToggleSection>
              <Text>Contact2</Text>
            </ToggleSection>
          )}
        </Section>

        <Section>
          <Subsection>
            <Text href="/booking">Booking</Text>
          </Subsection>
          {showBooking && (
            <ToggleSection>
              <Text>Booking2</Text>
            </ToggleSection>
          )}
        </Section>
      </Navbar>
    </>
  );
};

export default Header;
