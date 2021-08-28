import React from "react";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  UserContainer,
  Icon,
} from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/49556955?v=4",
              }}
            />
            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Jônatas</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserContainer>
      </Header>
    </Container>
  );
};
