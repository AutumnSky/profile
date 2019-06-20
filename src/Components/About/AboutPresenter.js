import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "Theme";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  background-color: white;
  padding: 2rem;
`;

const ProfileImage = styled.img`
  width: 30vw;
  height: 30vw;
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
`;

const DescContainer = styled.div``;

const DescItem = styled.div``;

const DescTitle = styled.h2`
  color: ${props => props.theme.fontItemTitle};
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const DescContent = styled.p`
  color: ${props => props.theme.fontItemContent};
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8rem;
  margin-bottom: 2rem;

  & .amph {
    color: red;
  }

  & h3 {
    color: #3498db;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-left: 10px;
  }

  & p {
    margin-bottom: 1.5rem;
    margin-left: 20px;
  }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <AboutContainer>
      <ProfileImage src="https://autumnportfolio.s3.ap-northeast-2.amazonaws.com/me/IMG_3752.png" />
      <DescContainer>
        <DescItem>
          <DescContent>
            I've been working as a Mobile App Developer for more than 8 years
            but now I'm also doing frontend and backend side of Web. And I'm
            continuously learning everyday.
            <br />
            Active, Creative, Passionate, Independent, Honest and Faithful.
          </DescContent>
        </DescItem>
        <DescItem>
          <DescTitle>Skills</DescTitle>
          <DescContent>
            <h3>Mobile Development</h3>
            <p>
              iOS, Android
              <br />
              CocoaPods, Cocos2D
              <br />
              Unity3D exports to iOS / Android
              <br />
              Hybrid App, Push Notification, Connect with Payment System
            </p>
            <h3>Web Development</h3>
            <p>
              React, React Native
              <br />
              Node.js
              <br />
              MongoDB, MySQL
            </p>
          </DescContent>
        </DescItem>
        <DescItem>
          <DescTitle>Hire Me</DescTitle>
          <DescContent>
            I am currently studying English in Ireland and looking for a Mobile/
            Full-stack Developer position. I have excellent development skills
            including iOS, Android, Frontend and Backend based on many years of
            experience in mobile app development. With a solid knowledge of
            computer science, I learn and adapt quickly to new concepts and
            technologies. I respect other's opinions and am a good communicator.
            You can contact me by email or mobile at any time.
          </DescContent>
        </DescItem>
        <DescItem>
          <DescTitle>Contact</DescTitle>
          <DescContent>
            doingnone@gmail.com
            <br />
            +353 (83) 325 0798
          </DescContent>
        </DescItem>
      </DescContainer>
    </AboutContainer>
  </ThemeProvider>
);
