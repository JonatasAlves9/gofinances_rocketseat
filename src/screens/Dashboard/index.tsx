import React from "react";
import { Highlight } from "../../components/Highlight";

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
  HighlightCards,
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
      <HighlightCards>
        <Highlight
          title={"Entradas"}
          ammount={"R$ 17.400,00"}
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        />
        <Highlight
          title={"Saídas"}
          ammount={"R$ 1.259,00"}
          lastTransaction="Última entrada dia 3 de abril"
          type="down"
        />
        <Highlight
          title={"Total"}
          ammount={"R$ 16.141,00"}
          lastTransaction="01 á 16 de abril"
          type="total"
        />
      </HighlightCards>
    </Container>
  );
};
