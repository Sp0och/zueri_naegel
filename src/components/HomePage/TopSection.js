import React from "react";
import styled from "styled-components";
import bg_video from "../../assets/nails.mp4";

const Container = styled.div`
  position: relative;
  top: -141px;
  height: 100vh;
  width: 100%;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  opacity: 0.8;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  mix-blend-mode: overlay;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
`;

const BoldText = styled.h1`
  font-size: 100px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const ItallicText = styled.h1`
  font-size: 90px;
  font-style: italic;
  font-weight: 400;
`;

const BackgroundVideo = () => {
  return (
    <Container>
      <Video src={bg_video} autoPlay muted loop />
      <Overlay />
      <Text>
        <BoldText>Pediküre</BoldText>
        <ItallicText>Mehr als nur Aussehen</ItallicText>
      </Text>
    </Container>
  );
};

export default BackgroundVideo;
