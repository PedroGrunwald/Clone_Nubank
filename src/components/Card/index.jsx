import React from "react";
import {ContainerFather,ContainerCard,ContainerPrice} from "./styled"
import {BsFillTrashFill} from 'react-icons/bs'

const Card = ({ card }) => {
  return (
    <ContainerFather>
      <ContainerCard>
      <b>{card.description}</b>
      <p>{card.type}</p>
      </ContainerCard>
      <ContainerPrice>
      <p> R${card.price},00</p>
      <BsFillTrashFill/>

      </ContainerPrice>
    </ContainerFather>
  );
};

export default Card;
