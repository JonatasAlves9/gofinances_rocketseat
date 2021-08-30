import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

export const Highlight = () => {
  return (
    <Container>
      <Header>
        <Title>Entrada</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>R$ 10,00</Amount>
        <LastTransaction>Útima entrada dia 13 de abril</LastTransaction>
      </Footer>
    </Container>
  );
};
