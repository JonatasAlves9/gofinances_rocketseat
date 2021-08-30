import React from "react";
import { Highlight } from "../../components/Highlight";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

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

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000.00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2001",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      amount: "R$ 59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "13/04/2001",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 1.200.00",
      category: {
        name: "Casa",
        icon: "shopping-bag",
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
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transections>
    </Container>
  );
};
