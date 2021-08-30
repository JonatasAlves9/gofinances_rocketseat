import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Highlight } from "../../components/Highlight";
import { TransactionCard } from "../../components/TransactionCard";

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
  Transections,
  Title,
  TransactionsList,
} from "./styles";

export const Dashboard = () => {
  const data = [
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000.00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2001",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000.00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2001",
    },
    {
      title: "Desenvolvimento de site",
      amount: "R$ 12.000.00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2001",
    },
  ];
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

      <Transections>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
        />
      </Transections>
    </Container>
  );
};
