import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeader = styled.header`
  height: 60px;
  background: #f8f9fa;
  box-shadow: 0px 4px 32px -12px rgb(0 0 0 / 25%);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: row;
    margin-left: 250px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fd377e;
`;

export const TitleSub = styled.h1`
  font-size: 30px;
  color: #212529;
`;

export const ButtonInicio = styled.button`
  font-family: "Nunito";
  width: 64px;
  height: 40px;
  box-sizing: border-box;
  background: #e9ecef;
  border: 1.4px solid #e9ecef;
  border-radius: 8px;
  color: #343a40;
  margin-right: 210px;
`;

export const Main = styled.div`
  display: flex;
 
  padding: 4rem;
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  width: 360px;
  
`;


