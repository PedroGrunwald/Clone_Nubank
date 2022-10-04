import React, { useState } from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import Total from "../../components/TotalMoney";
import {
  Main,
  ContainerHeader,
  Title,
  TitleSub,
  ButtonInicio,
  ContainerMain,
  Body,
} from "../Dashboard/styles";

const Dashboard = ({ setIsInicio }) => {
  const [listTransactions, setListTransactions] = useState([]);

  return (
    <Body>
      <ContainerHeader>
        <div>
          <Title>Nu</Title>
          <TitleSub>Kenzie</TitleSub>
        </div>
        <ButtonInicio
          onClick={() => {
            setIsInicio(true);
          }}
        >
          Inicio
        </ButtonInicio>
      </ContainerHeader>
    
    <Main>
      <ContainerMain>
        <Form
          setListTransactions={setListTransactions}
          listTransactions={listTransactions}
        />

        <Total listTransactions={listTransactions} />
      </ContainerMain>

      <List listTransactions={listTransactions} />

    </Main>
    </Body>
  );
};

export default Dashboard;
