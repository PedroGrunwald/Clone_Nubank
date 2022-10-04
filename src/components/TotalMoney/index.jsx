import React from "react";
import{ContainerMoney,TotalValue,Value,Description,ContainerTotal} from "./styles"


const Total = ({listTransactions}) => {

    const totalSum = listTransactions.length && listTransactions.reduce((prev, current) => current.type === "Saida" ? prev - Number(current.price) : prev + Number(current.price), 0)
    console.log("totalSum", totalSum) 
    return (
        <ContainerMoney>
            <ContainerTotal>
            <TotalValue>Valor total :</TotalValue>
            <Value>R${totalSum}</Value>
            </ContainerTotal>
            <Description>O valor se refere ao saldo</Description>
        </ContainerMoney>
    )
}

export default Total