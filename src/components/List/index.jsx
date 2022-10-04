import React from "react";
import Card from "../Card";
import {
  NavList,
  FinancialResume,
  ButtonFilter,
  ListTotal,
  DivBtn,
  ContainerTransactions,
  
} from "./styles";

const List = ({ listTransactions }) => {
  return (
    <ListTotal>
      <NavList>
        <FinancialResume>Resumo Financeiro</FinancialResume>
        <DivBtn>
          <ButtonFilter type="button">Todos</ButtonFilter>
          <ButtonFilter type="button">Entradas</ButtonFilter>
          <ButtonFilter type="button">Saidas</ButtonFilter>
        </DivBtn>
      </NavList>

      <ContainerTransactions>
        <ul>
          {listTransactions.length > 0 ? (
            listTransactions.map((card, index) => {
              return <Card card={card} key={index} />;
            })
          ) : (
            <>
              <p> Voce nao possui lançamentos</p>
              <img src="http://localhost:3000/images/NoCard.svg" alt="" />
            </>
          )}
        </ul>
      </ContainerTransactions>
    </ListTotal>
  );
};

export default List;
