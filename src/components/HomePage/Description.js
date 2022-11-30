import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";

const Container = styled.div`
  padding: 50px;
`;

const TextBox = styled.div`
  width: 300px;
`;

const Text = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
`;

const BookingButton = styled.button`
  background-color: white;
  border: 1px solid black;
  p {
    padding: 10px;
  }
`;

const Description = () => {
  return (
    <Container>
      <TextBox>
        <Text>
          Hello WOrld Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non omnis dolorum dignissimos
          enim architecto quos autem molestiae vel quo vitae nobis facilis accusantium at debitis necessitatibus
          voluptatem rem beatae, suscipit voluptatum ipsum, distinctio dolore dolores magnam? Porro, tenetur tempore
          maiores ullam natus, quaerat asperiores ratione mollitia nemo omnis adipisci!
        </Text>
      </TextBox>
      <TextBox>
        <Text>
          Hello WOrld Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non omnis dolorum dignissimos
          enim architecto quos autem molestiae vel quo vitae nobis facilis accusantium at debitis necessitatibus
          voluptatem rem beatae, suscipit voluptatum ipsum, distinctio dolore dolores magnam? Porro, tenetur tempore
          maiores ullam natus, quaerat asperiores ratione mollitia nemo omnis adipisci!
        </Text>
      </TextBox>
      <TextBox>
        <Text>
          Hello WOrld Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non omnis dolorum dignissimos
          enim architecto quos autem molestiae vel quo vitae nobis facilis accusantium at debitis necessitatibus
          voluptatem rem beatae, suscipit voluptatum ipsum, distinctio dolore dolores magnam? Porro, tenetur tempore
          maiores ullam natus, quaerat asperiores ratione mollitia nemo omnis adipisci!
        </Text>
      </TextBox>
      <TextBox>
        <Text>
          Hello WOrld Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi non omnis dolorum dignissimos
          enim architecto quos autem molestiae vel quo vitae nobis facilis accusantium at debitis necessitatibus
          voluptatem rem beatae, suscipit voluptatum ipsum, distinctio dolore dolores magnam? Porro, tenetur tempore
          maiores ullam natus, quaerat asperiores ratione mollitia nemo omnis adipisci!
        </Text>
      </TextBox>
      <BookingButton>Book Now</BookingButton>
    </Container>
  );
};

export default Description;
