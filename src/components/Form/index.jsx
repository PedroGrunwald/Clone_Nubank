import React from "react";
import { useState } from "react";
import {ContainerForm,Description,ContainerDescription,Value,ContainerValue,Type,ContainerSelect,ButtonValue,ContainerType,ContainerEntrance} from "./styles"

const Form = ({ setListTransactions,listTransactions}) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  

  function handleSubmit(event) {
    event.preventDefault();
   
    setListTransactions( [
      ...listTransactions,
      { description, price, type },
    ]);
  
    setDescription("");
    setPrice("");
    setType("");
  }

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <Description>Descrição</Description>
      <ContainerDescription
        type="text"
        placeholder="Digite sua descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <ContainerType>
        <ContainerEntrance>
      <Value>Valor</Value>
      <ContainerValue
        type="text"
        placeholder="digite o valor"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      </ContainerEntrance>
      <ContainerEntrance>
      <Type>Tipo de valor</Type>
      <ContainerSelect value={type} onChange={(event) => setType(event.target.value)}>
        <option value="">Selecionar</option>
        <option value="Entrada">Entrada</option>
        <option value="Saida">Saida</option>
      </ContainerSelect>
      </ContainerEntrance>
      </ContainerType>
      <ButtonValue type="submit">Inserir Valor </ButtonValue>
    </ContainerForm>
  );
};

export default Form;
