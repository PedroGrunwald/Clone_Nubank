import React from "react";
import { Container, PageTitle,ButtonIniciar,ParagraphTwo,ParagraphOne,PageSub,ContainerName } from "./styles";


const Inicio = ({setIsInicio}) => {
  return (
    <Container>
      <div>
        <ContainerName>
        <PageTitle>Nu</PageTitle>
        <PageSub>Kenzie</PageSub>
        </ContainerName>
        <ParagraphOne>Centralize o controle de suas finanças</ParagraphOne>
        <ParagraphTwo>de forma rapida e segura</ParagraphTwo>
        <ButtonIniciar onClick={()=>{
          setIsInicio(false)
        }}>iniciar</ButtonIniciar>
      </div>
      <img src="http://localhost:3000/images/illustration.svg" alt="" />
    </Container>
  );
};

export default Inicio;
