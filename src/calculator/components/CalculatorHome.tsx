import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context as CalculatorContext } from "../store";
import CalculatorPad from "./CalculatorPad";
import CalculatorOutBox from "./CalculatorOutputBox";

export const CalculatorBox = styled.div`
  color: #000000;
  margin-bottom: 2rem;
`;

export default function CalculatorHome() {
    const CalculatorStore = useContext(CalculatorContext);
    console.log(CalculatorStore);
    return (
        <CalculatorBox>
            <CalculatorOutBox/>
            <CalculatorPad/>
        </CalculatorBox>
    );
}